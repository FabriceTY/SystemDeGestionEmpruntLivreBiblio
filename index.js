//Importations des modules necessaires
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
//import { body } from 'express-validator'

//Creation de notre application 

//Voir le contenu de .env
import dotenv from 'dotenv'
/*import { auteurList, getAuteurById, addAuteur, deleteAuteurById, updateAuteur, getAuteurs} from './controllers/auteur.js'
import { rayonList, getRayonById, addRayon, deleteRayonById, updateRayon} from './controllers/rayon.js'
import { empruntList, getEmpruntById, addEmprunt, deleteEmpruntById, updateEmprunt} from './controllers/emprunt.js'
import { livreList, getLivreById, addLivre, deleteLivreById, updateLivre } from './controllers/livre.js'
import { utilisateurList, getUtilisateurById, addUtilisateur, deleteUtilisateurById, updateUtilisateur } from './controllers/utilisateur.js'
import { roleList, getRoleById, addRole, deleteRoleById, updateRole } from "./controllers/role.js";*/
//import { reservationList, getReservationById, addReservation, } from "./controllers/reservation.js";

const env = dotenv.config().parsed

console.log('env',env)

//importer la base de donnee

import database from './config/connexion.js'
import  routeUtilisateur from "./routes/routeUtilisateur.js";
import  routeAuteur  from "./routes/routeAuteur.js";
import  routeEmprunt  from "./routes/routeEmprunt.js";
import routeRole from "./routes/routeRole.js";
import  routeRayon  from "./routes/routeRayon.js";
import  routeLivre  from "./routes/routeLivre.js";
import  routeAutentification  from "./routes/routeAuthentification.js";
database.sync({alter:true})

const app = express()

//Utilisation des modules importes
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Utilisation des modules importes

app.use('/utilisateur', routeUtilisateur)
app.use('/login', routeAutentification)
app.use('/livre', routeLivre)
app.use('/emprunt', routeEmprunt)
app.use('/auteur', routeAuteur)
app.use('/rayon', routeRayon)
app.use('/role', routeRole)

/**
 * Partie reservee au traitement des routes sur la table Auteur
 */
/*
//Liste des auteurs
app.get('/auteurList', auteurList)

// retrouver un auteur selon son id
app.get('/auteurList/:id', getAuteurById)

// ajouter un auteur 
app.post('/addAuteur',body('nomAuteur').notEmpty(), addAuteur)
// Mettre à jour un auteur
app.put('/updateAuteur/:id', updateAuteur);
// Supprimer un auteur suivant son id
app.delete('/deleteAuteur/:id',deleteAuteurById)

// Route GET pour la liste des auteurs avec pagination
app.get('/auteurList', getAuteurs);
*/

/**
 * Partie reservee au traitement des routes sur la table emprunt
 */

/*
//Liste des emprunts
app.get('/empruntList', empruntList)

// retrouver un emprunt selon son id
app.get('/empruntList/:id', getEmpruntById)

// ajouter un emprunt 
app.post('/addEmprunt',addEmprunt)
// Mettre à jour un emprunt
app.put('/updateEmprunt/:id', updateEmprunt);
// Supprimer un emprunt suivant son id
app.delete('/deleteEmprunt/:id',deleteEmpruntById)
*/

/**
 * Partie reservee au traitement des routes sur la table Rayon
 */

/*
//Liste des rayons
app.get('/rayonList', rayonList)

// retrouver un rayon selon son id
app.get('/rayonList/:id', getRayonById)

// ajouter un rayon 
app.post('/addRayon',addRayon)
// Mettre à jour un rayon
app.put('/updateRayon/:id', updateRayon);
// Supprimer un rayon suivant son id
app.delete('/deleteRayon/:id',deleteRayonById)
*/

/**
 * Partie reservee au traitement des routes sur la table Livre
 */

/*
//Liste des livres
app.get('/livreList', livreList)

// retrouver un livre selon son id
app.get('/livreList/:id', getLivreById)

// ajouter un livre 
app.post('/addLivre',addLivre)
// Mettre à jour un livre
app.put('/updateLivre/:id', updateLivre);
// Supprimer un livre suivant son id
app.delete('/deleteLivre/:id',deleteLivreById)
*/

/**
 * Partie reservee au traitement des routes sur la table Utilisateur
 */

/*
//Liste des utilisateurs
app.get('/utilisateurList', utilisateurList)

// retrouver un utilisateur selon son id
app.get('/utilisateurList/:id', getUtilisateurById)

// ajouter un utilisateur
app.post('/addUtilisateur',addUtilisateur)
// Supprimer un utilisateur suivant son id
app.delete('/deleteUtilisateur/:id',deleteUtilisateurById)
// Mettre a jour un utilisateur
app.put('updateUtilisateur/:id',updateUtilisateur)  
*/

/**
 * Partie reservee au traitement des routes sur la table Role
 */

/*
//Liste des roles
app.get('/roleList', roleList)

// retrouver un role selon son id
app.get('/roleList/:id', getRoleById)

// ajouter un role
app.post('/addRole',addRole)
// Mettre à jour un role
app.put('/updateRole', updateRole);
// Supprimer un role suivant son id
app.delete('/deleteRole/:id',deleteRoleById)
*/

/**
 * Partie reservee au traitement des routes sur la table Reservation
 */
/*
//Liste des reservations
app.get('/reservationList', reservationList)

// retrouver un reservation selon son id
app.get('/reservationList/:id', getReservationById)

// ajouter un reservation
app.post('/addReservation',addReservation)
// Supprimer un reservation suivant son id
app.delete('/deleteReservation/:id',deleteReservationById)*/
const port = 5000

app.listen(port, () => console.log(`Notre serveur tourne sur le port ${port}`))


