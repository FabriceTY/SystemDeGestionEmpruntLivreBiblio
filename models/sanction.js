//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table 

const sanction = database.define('sanction', {    
    montant: DataTypes.STRING,
    typesanction: DataTypes.STRING,
    dateApplication: DataTypes.INTEGER
    
    
})

export default sanction  