//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Role

const Role = database.define('auteur', {    
    nomRole: DataTypes.STRING,
    descriptionRole: DataTypes.TEXT,
    typeRole: DataTypes.STRING
    
})

export default Role
