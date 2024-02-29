import { Auteur } from "../models/relations.js";

// fonction (controller) pour avoir la liste des departements
export const auteurList = async (req, res) => {
    try{
        const auteurs = await Auteur.findAll()
        res.status(200).json({ data: auteurs })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}