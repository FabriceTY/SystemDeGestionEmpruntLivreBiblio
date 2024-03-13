//Importer le router
import { Router } from "express";
import { auteurList, getAuteurById, addAuteur, deleteAuteurById, updateAuteur, getAuteurs } from '../controllers/auteur.js'

//Importer les regles de validations
import auteurRules from "../validations/validationAuteur.js";

//Protection des routes
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

//Instance de router
const routeAuteur = Router()

routeAuteur
    .get("/", auteurList)
    .get("/:id", getAuteurById)
    .get("/", getAuteurs) // obtenir les auteurs avec option de pagination
    .post("/", auteurRules, addAuteur)
    .put("/:id", auteurRules, updateAuteur)
    .delete("/:id", deleteAuteurById)
    // .get("/", auteurList)
    // .get("/:id", verifierToken,getAuteurById)
    // .post("/", verifierToken, autoriser(['admin']), auteurRules, addAuteur)
    // .put("/:id", verifierToken, autoriser(['admin', 'prof']), auteurRules, updateAuteur)
    // .delete("/:id", verifierToken, autoriser(['admin']), deleteAuteurById)


export default routeAuteur