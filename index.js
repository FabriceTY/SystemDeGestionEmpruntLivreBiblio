//Importations des modules necessaires
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'

//Creation de notre application 

//Voir le contenu de .env
import dotenv from 'dotenv'
//import { auteurList } from './controllers/auteur.js'
//import { livreList } from './controllers/livre.js'

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

//Liste des livres
//app.get('/liste-livre', livreList)

//app.get('/departments', departementList)

const port = 5000

app.listen(port, () => console.log(`Notre serveur tourne sur le port ${port}`))


