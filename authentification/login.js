import { Utilisateur } from "../models/relations.js";

//Importer le module de hachage
import  bcrypt  from 'bcrypt';

//Importer le module qui genere la clef
import jwt  from 'jsonwebtoken'

//Ajouter les validations
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    //Les informations de connexion

    const { emailUtilisateur, motDePasseUtilisateur } = req.body

    //Verification de l'emailUtilisateur
    if (!emailUtilisateur) return res.status(404).json({ message: "L'email est incorrect" })

    //Chercher la personne dans la base de donnees

    try {
        const user = await Utilisateur.findOne({ where: { emailUtilisateur } })

        //Verifier la presence de cette personne dans la base de donnees
        if (!user) return res.status(404).json({ message: "La personne n'existe pas!" })
        //Verification du mot de passe

        const mdpJuste = bcrypt.compareSync(motDePasseUtilisateur, user.motDePasseUtilisateur)

        if (!mdpJuste) return res.status(401).json({ message: "Mot de passe incorrect" })

        //Creation de la clef d'access
        const payload = { id: user.id }       
        const token = jwt.sign(payload, process.env.CODE_SECRET)

        res.status(200).json({ data: user, token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}