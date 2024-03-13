import { Livre } from "../models/relations.js";
//Module pour les resultats de la validation
import { validationResult } from "express-validator";

// fonction (controller) pour avoir la liste des livres
export const livreList = async (req, res) => {
    try{
        const livres = await Livre.findAll()
        res.status(200).json({ data: livres })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner un livre suivant son id
export const getLivreById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const livreById = await Livre.findByPk(id)
        res.status(200).json({data:livreById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}


// Contrôleur pour ajouter un element dans la table Livre
export const addLivre = async (req, res) => {
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Extraire les donnees de la requete
    const { nomLivre, nombrePageLivre,auteurId, rayonId, utilisateurId } = req.body;

    try {
        // Créer un nouveau livre dans la base de donnees
        const newLivre = await Livre.create({            
            nomLivre: nomLivre,
            nombrePageLivre: nombrePageLivre,
            auteurId,
            rayonId,
            utilisateurId
            
        });

        // Envoyer une reponse avec les détails du livre ajoute
        res.status(201).json({ data: newLivre, message: 'Livre ajoute avec succes' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

// Controleur pour mettre a jour un element dans la table Livre
export const updateLivre = async (req, res) => {
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant du livre a mettre à jour
    const { nomLivre, nombrePageLivre, auteurId, rayonId, utilisateurId } = req.body;

    try {
        // Rechercher un livre dans la base de donnees par son ID
        const livre = await Livre.findByPk(id);

        // Verifier si le livre existe
        if (!livre) {
            return res.status(404).json({ message: 'Livre non trouvé' });
        }

        // Mettre a jour les proprietes du livre
        await livre.update({
            nomLivre: nomLivre,
            nombrePageLivre: nombrePageLivre,
            auteurId,
            rayonId,
            utilisateurId
            
        });

        // Renvoyer une reponse avec les details du livre mis a jour
        res.status(200).json({ data: livre, message: 'Livre mis à jour avec succes' });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};


// fonction (Controlleur) pour supprimer un livre selon son id
export const deleteLivreById = async (req, res) => {
    // Extraire l'ID du livre a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche du livre dans la base de donnees par son ID
        const livreToDelete = await Livre.findByPk(id);

        // Verifier l'existance du livre
        if (!livreToDelete) {
            return res.status(404).json({ message: 'Livre not found' });
        }

        // Supprimer un livre de la base de donnees
        await livreToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Livre deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

