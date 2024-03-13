//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table Reservation

const Reservation = database.define('reservation', {    
    dateReservation: DataTypes.DATE   
    
}, { timestamps: false })

export default Reservation;
