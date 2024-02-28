//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Livre

const Livre = database.define('livre', {
    idLivre: { type: DataTypes.INTEGER, allowNull: false }, //NOT NULL
    nomLivre: DataTypes.STRING
    
    
})

export default Livre
