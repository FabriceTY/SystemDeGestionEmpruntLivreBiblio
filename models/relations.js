//Importer les modeles
import { Sequelize } from "sequelize";
import Auteur from "./Auteur.js";
import Livre from "./Livre.js";
import Rayon from "./Rayon.js";

//Creation des relations

//Un livre a un auteur
Livre.belongsTo(Auteur)
//Un auteur peut ecrire plusieur livre
Auteur.hasMany(Livre)

//Un livre appartient à un rayon.
Livre.belongsTo(Rayon) 
//Un rayon possède plusieurs livres
Rayon.hasMany(Livre)

export {Auteur,Livre,Rayon}
