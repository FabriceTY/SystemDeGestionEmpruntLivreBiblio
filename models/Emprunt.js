//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Emprunt

const Emprunt = database.define('emprunt', {    
    nomDocumentEmprunt: DataTypes.STRING,
    dateEmprunt: DataTypes.DATE,
    datePrevueRetourEmprunt: DataTypes.DATE,
    dateEffectiveRetour:DataTypes.DATE,
    statutEmprunt:DataTypes.STRING // statut = en cours, en retard ou retourne 
    
    
}, { timestamps: false })

export default Emprunt
