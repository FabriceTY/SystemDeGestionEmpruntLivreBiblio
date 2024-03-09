import { Utilisateur } from "../models/relations.js";

// fonction (controller) pour avoir la liste des utilisateurs
export const utilisateurList = async (req, res) => {
    try{
        const utilisateurs = await Utilisateur.findAll()
        res.status(200).json({ data: utilisateurs })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner un utilisateur suivant son id
export const getUtilisateurById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const utilisateurById = await Utilisateur.findByPk(id)
        res.status(200).json({data:utilisateurById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}

// Controleur pour mettre a jour un element dans la table Utilisateur
export const updateUtilisateur = async (req, res) => {
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant de l'utilisateur à mettre à jour
    const { nomUtilisateur, prenomUtilisateur, motDePasseUtilisateur,emailUtilisateur } = req.body;

    try {
        // Rechercher l'utilisateur dans la base de donnees par son ID
        const utilisateur = await Utilisateur.findByPk(id);

        // Verifier si l'utilisateur existe
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Mettre a jour les proprietes de l'utilisateur
        await utilisateur.update({
            nomUtilisateur: nomUtilisateur,
            prenomUtilisateur: prenomUtilisateur,
            motDePasseUtilisateur: motDePasseUtilisateur,
            emailUtilisateur:emailUtilisateur
        });

        // Renvoyer une reponse avec les details de l'utilisateur mis a jour
        res.status(200).json({ data: utilisateur, message: 'Utilisateur mis à jour avec succès' });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour ajouter un element dans la table Utilisateur
export const addUtilisateur = async (req, res) => {
    // Extraire les donnees de la requete
    const { nomUtilisateur,prenomUtilisateur, motDePasseUtilisateur, emailUtilisateur } = req.body;

    try {
        // Créer un nouvel utilisateur dans la base de donnees
        const newUtilisateur = await Utilisateur.create({            
            nomUtilisateur: nomUtilisateur,
            prenomUtilisateur: prenomUtilisateur,
            motDePasseUtilisateur: motDePasseUtilisateur,
            emailUtilisateur:emailUtilisateur
        });

        // Envoyer une reponse avec les détails de l'utilisateur ajouté
        res.status(201).json({ data: newUtilisateur, message: 'Utilisateur ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};


// fonction (Controlleur) pour supprimer un utilisateur selon son id
export const deleteUtilisateurById = async (req, res) => {
    // Extraire l'ID de l'utilisateur a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche de l'utilisateur dans la base de donnees par son ID
        const utilisateurToDelete = await Utilisateur.findByPk(id);

        // Verifier l'existance de l'utilisateur
        if (!utilisateurToDelete) {
            return res.status(404).json({ message: 'Utilisateur not found' });
        }

        // Supprimer l'utilisateur de la base de donnees
        await utilisateurToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Utilisateur deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

