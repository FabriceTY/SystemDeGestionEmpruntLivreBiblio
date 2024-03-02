//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Rayon

const Rayon = database.define('rayon', {    
    nomRayon: DataTypes.STRING, // bande-anime, fiction, policier
    descriptionRayon: DataTypes.TEXT    
    
})

export default Rayon
