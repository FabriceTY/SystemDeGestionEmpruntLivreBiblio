//Importer les modeles
import { Sequelize } from "sequelize";
import Auteur from "./Auteur.js";
import Livre from "./Livre.js";
import Rayon from "./Rayon.js";
import Utilisateur from "./Utilisateur.js";
import Role from "./Role.js";
import Emprunt from "./Emprunt.js";
//import { Reservation } from "./Reservation.js";

//Creation des relations

//Un auteur peut ecrire plusieur livre
Auteur.hasMany(Livre)
//Un livre a un auteur
Livre.belongsTo(Auteur)


//Un rayon possède plusieurs livres
Rayon.hasMany(Livre)
//Un livre appartient à un rayon.
Livre.belongsTo(Rayon) 


// Un utilisateur appartient a un seul role
Utilisateur.belongsTo(Role);

// Un role est attribue a plusieurs utilisateurs
Role.hasMany(Utilisateur);
/*
// Definition la relation Many-to-Many entre Livre et Utilisateur
Livre.belongsToMany(Utilisateur, { through: 'Reservation' });
Utilisateur.belongsToMany(Livre, { through: 'Reservation' });*/

// un utilisateur peut reserver plusieurs livres
Utilisateur.hasMany(Livre); // Définition d'un alias pour la relation

// un livre peut etre reserve par un seul utilisateur 
Livre.belongsTo(Utilisateur); 


// Un utilisateur effectue plusieurs emprunts
Utilisateur.hasMany(Emprunt);

// Un emprunt est effectue par un utilisateur
Emprunt.belongsTo(Utilisateur);

//export {Auteur,Livre,Rayon, Role, Utilisateur, Emprunt, Reservation}

export {Auteur,Livre,Rayon, Emprunt, Utilisateur, Role}

