import { Role } from "../models/relations.js";

// fonction (controller) pour avoir la liste des roles
export const roleList = async (req, res) => {
    try{
        const roles = await Role.findAll()
        res.status(200).json({ data: roles })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner un role suivant son id
export const getRoleById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const roleById = await Role.findByPk(id)
        res.status(200).json({data:roleById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}

// Controleur pour mettre a jour un element dans la table Role
export const updateRole = async (req, res) => {
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant du role a mettre a jour
    const { nomRole, descriptionRole, typeRole } = req.body;

    try {
        // Rechercher un role dans la base de donnees par son ID
        const role = await Role.findByPk(id);

        // Verifier si le role existe
        if (!role) {
            return res.status(404).json({ message: 'Role non trouvé' });
        }

        // Mettre a jour les proprietes du role
        await role.update({
            nomRole: nomRole,
            descriptionRole: descriptionRole,
            typeRole: typeRole
            
        });

        // Renvoyer une reponse avec les details du role mis a jour
        res.status(200).json({ data: role, message: 'Role mis à jour avec succes' });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour ajouter un element dans la table Role
export const addRole = async (req, res) => {
    // Extraire les donnees de la requete
    const { nomRole, descriptionRole, typeRole } = req.body;

    try {
        // Créer un nouvel role dans la base de donnees
        const newRole = await Role.create({            
            nomRole: nomRole,
            descriptionRole: descriptionRole,
            typeRole: typeRole
        });

        // Envoyer une reponse avec les détails du role ajouté
        res.status(201).json({ data: newRole, message: 'Role ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};


// fonction (Controlleur) pour supprimer un role selon son id
export const deleteRoleById = async (req, res) => {
    // Extraire l'ID du role a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche d'un role dans la base de donnees par son ID
        const roleToDelete = await Role.findByPk(id);

        // Verifier l'existance du role
        if (!roleToDelete) {
            return res.status(404).json({ message: 'Role not found' });
        }

        // Supprimer le role de la base de donnees
        await roleToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

