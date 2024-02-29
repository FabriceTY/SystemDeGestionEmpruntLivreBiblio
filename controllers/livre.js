import { Livre } from "../models/relations.js";

// fonction (controller) pour avoir la liste des departements
export const livreList = async (req, res) => {
    try{
        const livres = await Livre.findAll()
        res.status(200).json({ data: livres })

    }catch(error){
        res.status(404).json({message:error.message})
    }
    
}