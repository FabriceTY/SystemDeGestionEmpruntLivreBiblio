
//Importer le modele Utilisateur
import { Utilisateur } from '../models/relations.js'

const autoriser = roles => async (req, res, next) => {
    //roles peut etre plusieurs
    //roles=['admin','gestionnaire']

    //Recuperer l'id a partir de la req
    const id = req.userId

    //Chercher la personne dans la base de donnees

    try {
        const user = await Utilisateur.findByPk(id)
        if (!user) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })

        //Recuperer le role de la personne 
        const role = await user.getRole()

        if(!role) return res.status(403).json({ message: "Pas autorise a voir cette route !!" })

        if (roles?.includes(role.nomRole.toLowerCase())) {
            next()
            return
        } else {
            return res.status(403).json({ message: "Vous n'etes pas autorises..." })
        }


    } catch (error) {
        res.status(403).json({ message: error.message })
    }

}

export default autoriser