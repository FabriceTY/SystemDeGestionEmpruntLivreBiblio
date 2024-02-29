//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Auteur

const Auteur = database.define('auteur', {    
    nomAuteur: DataTypes.STRING,
    prenomAuteur: DataTypes.STRING,
    sexeAuteur: DataTypes.STRING
    
})

export default Auteur
