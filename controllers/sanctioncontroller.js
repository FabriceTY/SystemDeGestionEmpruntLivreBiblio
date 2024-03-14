import sanction from "../Modeles/sanction"  
import {sanction} from "../models/relations.js"

export const sanctionList= async (req, res) => {
    try{
        const sanction = await sanction.findAll()
        res.status(200).json({ data: sanction })

    }catch(error){
        res.status(404).json({message:error.message})
    }
}
export const sanctionadd = async (req, res) => {
    // Extraire les donnees de la requete
    const { montant, typesanction, dateApplication } = req.body;

    try {
        // Créer un nouvel sanction dans la base de donnees
        const newsanction = await sanction.create({            
            montant: montant,
            typesanction: typesanction,
            dateApplication: dateApplication,

        });   

        // Envoyer une reponse avec les détails de  sanction ajouté
        res.status(201).json({ data: newsanction, message: 'sanction ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};
export const updatesanction = async (req, res) => {
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant de sanction à mettre à jour
    const {  montant, typesanction, dateApplication  } = req.body;

    try {
        // Rechercher sanction dans la base de donnees par son ID
        const sanction = await sanctionadd.findByPk(id);

        // Verifier si sanction existe
        if (!sanction) {
            return res.status(404).json({ message: 'sanction non trouvé' });
        }
    
 // Mettre a jour les proprietes de sanction
 await sanction.update({
    montant: montant,
    typesanction: typesanction,
    dateApplication: dateApplication,
});

// Renvoyer une reponse avec les details de sanction mis a jour
    res.status(200).json({ data: sanction, message: 'sanction mis à jour avec succès' });}
catch (error) {
// Gerer les erreurs
res.status(500).json({ message: error.message });
}
}
// fonction (Controlleur) pour supprimer un sanction selon son id
export const deletesanctionById = async (req, res) => {
    // Extraire l'ID de sanction a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche de sanction dans la base de donnees par son ID
        const sanctionToDelete = await sanction.findByPk(id);

        // Verifier l'existance de sanction
        if (!sanctionToDelete) {
            return res.status(404).json({ message: 'sanction not found' });
        }

        // Supprimer sanction de la base de donnees
        await sanctionToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'sanction deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};
