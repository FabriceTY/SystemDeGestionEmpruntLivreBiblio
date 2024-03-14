import exemplaire from "../Modeles/exemplaire"
import {exemplaire} from "../models/relations.js"

export const exemplaireList= async (req, res) => {
    try{
        const exemplaire = await exemplaire.findAll()
        res.status(200).json({ data: exemplaire })

    }catch(error){
        res.status(404).json({message:error.message})
    }
}
export const exemplaireadd = async (req, res) => {
    // Extraire les donnees de la requete
    const { etatExemplaire, quantite, idEmpreunt } = req.body;

    try {
        // Créer un nouvel exemplaire dans la base de donnees
        const newexemplaire = await exemplaire.create({            
            etatExemplaire: etatExemplaire,
           quantite: quantite,
           idEmpreunt: idEmpreunt,

        });

        // Envoyer une reponse avec les détails de l'exemplaire ajouté
        res.status(201).json({ data: newexemplaire, message: 'exemplaire ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};
export const updateexemplaire = async (req, res) => {
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant de l'exemplaire à mettre à jour
    const { etatExemplaire, quantite, idEmpreunt } = req.body;

    try {
        // Rechercher l'exemplaire dans la base de donnees par son ID
        const exemplaire = await exemplaireadd.findByPk(id);

        // Verifier si l'exemplaire existe
        if (!exemplaire) {
            return res.status(404).json({ message: 'exemplaire non trouvé' });
        }
    
 // Mettre a jour les proprietes de l'exemplaire
 await exemplaire.update({
    etatExemplaire: etatExemplaire,
    quantite: quantite,
    idEmpreunt: idEmpreunt,
});

// Renvoyer une reponse avec les details de l'exemplaire mis a jour
    res.status(200).json({ data: exemplaire, message: 'exemplaire mis à jour avec succès' });}
catch (error) {
// Gerer les erreurs
res.status(500).json({ message: error.message });
}
}
// fonction (Controlleur) pour supprimer un exemplaire selon son id
export const deleteexemplaireById = async (req, res) => {
    // Extraire l'ID de l'exemplaire a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche de l'exemplaire dans la base de donnees par son ID
        const exemplaireToDelete = await exemplaire.findByPk(id);

        // Verifier l'existance de l'exemplaire
        if (!exemplaireToDelete) {
            return res.status(404).json({ message: 'exemplaire not found' });
        }

        // Supprimer l'exemplaire de la base de donnees
        await exemplaireToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'exemplaire deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

