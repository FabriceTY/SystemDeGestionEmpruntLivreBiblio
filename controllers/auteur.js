import { Auteur } from "../models/relations.js";
import {validationResult } from 'express-validator';



// fonction (controller) pour avoir la liste des auteurs
export const auteurList = async (req, res) => {
    try{
        const auteurs = await Auteur.findAll()
        res.status(200).json({ data: auteurs })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner un auteur suivant son id
export const getAuteurById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const auteurById = await Auteur.findByPk(id)
        res.status(200).json({data:auteurById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}


// Controleur pour ajouter un element dans la table Auteur
export const addAuteur = async (req, res) => {

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Extraire les donnees de la requete
    const { nomAuteur, prenomAuteur, sexeAuteur } = req.body;      

    try {
        // Créer un nouvel auteur dans la base de donnees
        const newAuteur = await Auteur.create({            
            nomAuteur: nomAuteur,
            prenomAuteur: prenomAuteur,
            sexeAuteur: sexeAuteur
        });

        // Envoyer une reponse avec les détails de l'auteur ajouté
        res.status(201).json({ data: newAuteur, message: 'Auteur ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};


// Controleur pour mettre a jour un element dans la table Auteur
export const updateAuteur = async (req, res) => {
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant de l'auteur a mettre a jour
    const { nomAuteur, prenomAuteur, sexeAuteur } = req.body;

    try {
        // Rechercher l'auteur dans la base de donnees par son ID
        const auteur = await Auteur.findByPk(id);

        // Verifier si l'auteur existe
        if (!auteur) {
            return res.status(404).json({ message: 'Auteur non trouvé' });
        }

        // Mettre a jour les proprietes de l'auteur
        await auteur.update({
            nomAuteur: nomAuteur,
            prenomAuteur: prenomAuteur,
            sexeAuteur: sexeAuteur
        });

        // Renvoyer une reponse avec les details de l'auteur mis a jour
        res.status(200).json({ data: auteur, message: 'Auteur mis à jour avec succès' });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};


// fonction (Controlleur) pour supprimer un auteur selon son id
export const deleteAuteurById = async (req, res) => {
    // Extraire l'ID de l'auteur a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche de l'auteur dans la base de donnees par son ID
        const auteurToDelete = await Auteur.findByPk(id);

        // Verifier l'existance de l'auteur
        if (!auteurToDelete) {
            return res.status(404).json({ message: 'Auteur not found' });
        }

        // Supprimer l'auteur de la base de donnees
        await auteurToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Auteur deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

// Controleur pour obtenir la liste des auteurs avec pagination
export const getAuteurs = async (req, res) => {
    // Extraire les parametres de pagination de la requete
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    try {
        // Recuperer la liste des auteurs en utilisant les parametres de pagination
        const auteurs = await Auteur.findAndCountAll({
            limit: limit,
            offset: offset
        });

        // Envoyer la liste des auteurs en reponse
        res.status(200).json({ data: auteurs.rows, total: auteurs.count });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};


