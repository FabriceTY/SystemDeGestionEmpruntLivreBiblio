//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Livre

const Livre = database.define('livre', {    
    nomLivre: DataTypes.STRING,
    nombrePageLivre: DataTypes.INTEGER    
    
}, { timestamps: false })

export default Livre
