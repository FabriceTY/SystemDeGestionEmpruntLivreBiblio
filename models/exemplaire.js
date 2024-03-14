//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table 

const exemplaire = database.define('exemplaire', {    
    EtatExemplaire: DataTypes.STRING,
    quantite: DataTypes.INTEGER,
    idEmprunt: DataTypes.INTEGER
    
    
})

export default exemplaire