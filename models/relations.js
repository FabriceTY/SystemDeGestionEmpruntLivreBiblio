//Importer les modeles
import { Sequelize } from "sequelize";
import Auteur from "./Auteur.js";
import Livre from "./Livre.js";
import Rayon from "./Rayon.js";
import Utilisateur from "./Utilisateur.js";
import Role from "./Role.js";

//Creation des relations

//Un livre a un auteur
Livre.belongsTo(Auteur)
//Un auteur peut ecrire plusieur livre
Auteur.hasMany(Livre)

//Un livre appartient à un rayon.
Livre.belongsTo(Rayon) 
//Un rayon possède plusieurs livres
Rayon.hasMany(Livre)

// Un utilisateur appartient a un seul role
Utilisateur.belongsTo(Role);

// Un role est attribue a plusieurs utilisateurs
Role.hasMany(Utilisateur);

// Definition la relation Many-to-Many entre Livre et Utilisateur
Livre.belongsToMany(Utilisateur, { through: 'Reservation' });
Utilisateur.belongsToMany(Livre, { through: 'Reservation' });

export {Auteur,Livre,Rayon, Role, Utilisateur}
