//Importer les modeles
import { Sequelize } from "sequelize";
import Auteur from "./Auteur.js";
import Livre from "./Livre.js";

//Creation des relations

//Un livre a un auteur
Livre.belongsTo(Auteur)
//Un auteur peut ecrire plusieur livre
Auteur.hasMany(Livre)

// Synchroniser les modèles avec la base de données pour créer les tables
/*Sequelize.sync({ force: true }) // Utilisez { force: true } pour supprimer et recréer les tables à chaque fois
  .then(() => {
    console.log('Tables créées avec succès');
  })
  .catch(err => {
    console.error('Erreur lors de la synchronisation des tables :', err);
  });*/
export {Auteur,Livre}