//Importations des modules necessaires
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'

//Creation de notre application 

//Voir le contenu de .env
import dotenv from 'dotenv'
import { auteurList, getAuteurById, addAuteur, deleteAuteurById} from './controllers/auteur.js'
import { rayonList, getRayonById, addRayon, deleteRayonById} from './controllers/rayon.js'
import { livreList } from './controllers/livre.js'

const env = dotenv.config().parsed

console.log('env',env)

//importer la base de donnee

import database from './config/connexion.js'
database.sync()

const app = express()

//Utilisation des modules importes
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//Une route pour tester
const callbackfn = (req, res) => {  //Un controleur
    const name = req.params.name
    res.send(`Bonjour ${name}, tout va bien?`)
}

app.get('/salutation/:name', callbackfn)
/**
 * Partie reservee au traitement des routes sur la table Auteur
 */

//Liste des auteurs
app.get('/auteurList', auteurList)

// retrouver un auteur selon son id
app.get('/auteurList/:id', getAuteurById)

// ajouter un auteur 
app.post('/addAuteur',addAuteur)
// Supprimer un auteur suivant son id
app.delete('/deleteAuteur/:id',deleteAuteurById)

/**
 * Partie reservee au traitement des routes sur la table Rayon
 */

//Liste des rayons
app.get('/rayonList', rayonList)

// retrouver un rayon selon son id
app.get('/rayonList/:id', getRayonById)

// ajouter un rayon 
app.post('/addRayon',addRayon)
// Supprimer un rayon suivant son id
app.delete('/deleteRayon/:id',deleteRayonById)

// liste des livres
app.get('/liste_livre', livreList)

const port = 5000

app.listen(port, () => console.log(`Notre serveur tourne sur le port ${port}`))


