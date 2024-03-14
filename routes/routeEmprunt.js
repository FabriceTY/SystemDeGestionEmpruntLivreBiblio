//Importer le router
import { Router } from "express";
import { empruntList, getEmpruntById, addEmprunt, deleteEmpruntById, updateEmprunt } from '../controllers/emprunt.js'

//Importer les regles de validations
import empruntRules from "../validations/validationEmprunt.js";

//Protection des routes
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

//Instance de router
const routeEmprunt = Router()

routeEmprunt
    .get("/", empruntList)
    .get("/:id", getEmpruntById)
    .post("/", empruntRules, addEmprunt)
    .put("/:id",autoriser(['admin']), empruntRules, updateEmprunt)
    .delete("/:id", verifierToken, autoriser(['admin']), deleteEmpruntById)
    // .get("/", verifierToken, empruntList)
    // .get("/:id", verifierToken,getEmpruntById)
    // .post("/", verifierToken, autoriser(['admin']), empruntRules, addEmprunt)
    // .put("/:id", verifierToken, autoriser(['admin', 'prof']), empruntRules, updateEmprunt)
    // .delete("/:id", verifierToken, autoriser(['admin']), deleteEmpruntById)


export default routeEmprunt