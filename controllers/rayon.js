import { Rayon } from "../models/relations.js";

// fonction (controller) pour avoir la liste des rayons
export const rayonList = async (req, res) => {
    try{
        const rayons = await Rayon.findAll()
        res.status(200).json({ data: rayons })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner un rayon suivant son id
export const getRayonById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const rayonById = await Rayon.findByPk(id)
        res.status(200).json({data:rayonById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}


// Contrôleur pour ajouter un element dans la table Rayon
export const addRayon = async (req, res) => {
    // Extraire les donnees de la requete
    const { nomRayon, descriptionRayon } = req.body;

    try {
        // Créer un nouvel rayon dans la base de donnees
        const newRayon = await Rayon.create({            
            nomRayon: nomRayon,
            descriptionRayon: descriptionRayon
            
        });

        // Envoyer une reponse avec les details du rayon cree
        res.status(201).json({ data: newRayon, message: 'Rayon ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};


// fonction (Controlleur) pour supprimer un rayon selon son id
export const deleteRayonById = async (req, res) => {
    // Extraire l'ID du rayon a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche du rayon dans la base de donnees par son ID
        const rayonToDelete = await Rayon.findByPk(id);

        // Verifier l'existance du rayon
        if (!rayonToDelete) {
            return res.status(404).json({ message: 'Rayon not found' });
        }

        // Supprimer le rayon de la base de donnees
        await rayonToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Rayon deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

