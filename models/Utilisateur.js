//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Utilisateur

const Utilisateur = database.define('auteur', {    
    nomUtilisateur: DataTypes.STRING,
    prenomUtilisateur: DataTypes.STRING,
    motDePasseUtilisateur: DataTypes.STRING,
    emailUtilisateur : DataTypes.STRING
    
    
})

export default Utilisateur
