//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Auteur

const Auteur = database.define('auteur', {
    idAuteur: { type: DataTypes.INTEGER, allowNull: false }, //NOT NULL
    nomAuteur: DataTypes.STRING,
    prenomAuteur: DataTypes.STRING,
    sexeAuteur: DataTypes.STRING
    
})

export default Auteur