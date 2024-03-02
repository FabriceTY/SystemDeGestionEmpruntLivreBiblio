import { Reservation } from "../models/relations.js";

// fonction (controller) pour avoir la liste des reservations
export const reservationList = async (req, res) => {
    try{
        const reservations = await Reservation.findAll()
        res.status(200).json({ data: reservations })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}

// fonction (controller) pour retourner une reservation suivant son id
export const getReservationById = async(req, res)=>{
    let{id} = req.params
    if(!id) return res.status(400).json({message:'id is required'})

    try {
        const reservationById = await Reservation.findByPk(id)
        res.status(200).json({data:reservationById})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}


// Controleur pour ajouter un element dans la table Reservation
export const addReservation = async (req, res) => {
    // Extraire les donnees de la requete
    const { dateReservation} = req.body;

    try {
        // Creer un nouvel reservation dans la base de donnees
        const newReservation = await Reservation.create({            
            dateReservation: dateReservation            
            
        });

        // Envoyer une reponse avec les details du reservation cree
        res.status(201).json({ data: newReservation, message: 'Reservation ajoute avec succes' });
    } catch (error) {
        // Gérer les erreurs
        res.status(404).json({ message: error.message });
    }
};

// Controleur pour mettre a jour un element dans la table Reservation
export const updateReservation = async (req, res) => {
    // Extraire les donnees de la requete
    const { id } = req.params; // L'identifiant du reservation a mettre a jour
    const { dateReservation } = req.body;

    try {
        // Rechercher un reservation dans la base de donnees par son ID
        const reservation = await Reservation.findByPk(id);

        // Verifier si le reservation existe
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation non trouvé' });
        }

        // Mettre a jour les proprietes du reservation
        await reservation.update({
            dateReservation: dateReservation            
            
        });

        // Renvoyer une reponse avec les details du reservation mis a jour
        res.status(200).json({ data: reservation, message: 'Reservation mis à jour avec succes' });
    } catch (error) {
        // Gerer les erreurs
        res.status(500).json({ message: error.message });
    }
};

// fonction (Controlleur) pour supprimer un reservation selon son id
export const deleteReservationById = async (req, res) => {
    // Extraire l'ID du reservation a supprimer a partir des parametres de la requete
    const { id } = req.params;

    try {
        // Recherche du reservation dans la base de donnees par son ID
        const reservationToDelete = await Reservation.findByPk(id);

        // Verifier l'existance du reservation
        if (!reservationToDelete) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        // Supprimer la reservation de la base de donnees
        await reservationToDelete.destroy();

        // Envoyer une reponse de confirmation
        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        // Gerer les erreurs
        res.status(404).json({ message: error.message });
    }
};

