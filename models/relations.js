//Importer les modeles
import Auteur from "./Auteur.js";
import Livre from "./Livre.js";

//Creation des relations

//Un livre a un auteur
Livre.belongsTo(Auteur)
//Un auteur peut ecrire plusieur livre
Auteur.hasMany(Livre)

export {Auteur,Livre}