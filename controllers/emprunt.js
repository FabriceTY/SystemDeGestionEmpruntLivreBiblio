import { Emprunt } from "../models/relations.js";

//Module pour les resultats de la validation
import { validationResult } from "express-validator";


// fonction (controller) pour avoir la liste des emprunts
export const empruntList = async (req, res) => {
    try{
        const emprunts = await Emprunt.findAll()
        res.status(200).json({ data: emprunts })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner un emprunt suivant son id
export const getEmpruntById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const empruntById = await Emprunt.findByPk(id)
        res.status(200).json({data:empruntById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}


// Controleur pour ajouter un element dans la table Emprunt
export const addEmprunt = async (req, res) => {
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Extraire les donnees de la requete
    const { nomDocumentEmprunt, dateEmprunt, datePrevueRetourEmprunt,dateEffectiveRetour,statutEmprunt,utilisateurId } = req.body;

    try {
        // Créer un nouvel emprunt dans la base de donnees
        const newEmprunt = await Emprunt.create({            
            nomDocumentEmprunt,
            dateEmprunt: dateEmprunt,
            datePrevueRetourEmprunt: datePrevueRetourEmprunt,
            dateEffectiveRetour:dateEffectiveRetour,
            statutEmprunt,
            utilisateurId
        });

        // Envoyer une reponse avec les details de l'emprunt ajoute
        res.status(201).json({ data: newEmprunt, message: 'Emprunt ajoute avec succes' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

// Controleur pour mettre a jour un element dans la table Emprunt
export const updateEmprunt = async (req, res) => {
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant de l'emprunt a mettre à jour
    const { nomDocumentEmprunt, dateEmprunt, datePrevueRetourEmprunt, dateEffectiveRetour, statutEmprunt,utilisateurId } = req.body;

    try {
        // Rechercher l'emprunt dans la base de donnees par son ID
        const emprunt = await Emprunt.findByPk(id);

        // Verifier si l'emprunt existe
        if (!emprunt) {
            return res.status(404).json({ message: 'Emprunt non trouvé' });
        }

        // Mettre a jour les proprietes de l'emprunt
        await emprunt.update({
            nomDocumentEmprunt: nomDocumentEmprunt,
            dateEmprunt: dateEmprunt,
            datePrevueRetourEmprunt: datePrevueRetourEmprunt,
            dateEffectiveRetour: dateEffectiveRetour,
            statutEmprunt: statutEmprunt,
            utilisateurId
        });

        // Renvoyer une reponse avec les details de l'emprunt mis a jour
        res.status(200).json({ data: emprunt, message: 'Emprunt mis à jour avec succès' });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};


// fonction (Controlleur) pour supprimer un emprunt selon son id
export const deleteEmpruntById = async (req, res) => {
    // Extraire l'ID de l'emprunt a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche de l'emprunt dans la base de donnees par son ID
        const empruntToDelete = await Emprunt.findByPk(id);

        // Verifier l'existance de l'emprunt
        if (!empruntToDelete) {
            return res.status(404).json({ message: 'Emprunt not found' });
        }

        // Supprimer l'emprunt de la base de donnees
        await empruntToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Emprunt deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

