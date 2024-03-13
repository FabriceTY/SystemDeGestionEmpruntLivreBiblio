//Importer le router
import { Router } from "express";
import { livreList, getLivreById, addLivre, deleteLivreById, updateLivre } from '../controllers/livre.js'

//Importer les regles de validations
import livreRules from "../validations/validationLivre.js";

//Protection des routes
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

//Instance de router
const routeLivre = Router()

routeLivre
    .get("/", livreList)
    .get("/:id",getLivreById)
    .post("/", livreRules, addLivre)
    .put("/:id", livreRules, updateLivre)
    .delete("/:id", deleteLivreById)
    // .get("/", verifierToken, livreList)
    // .get("/:id", verifierToken,getLivreById)
    // .post("/", verifierToken, autoriser(['admin']), livreRules, addLivre)
    // .put("/:id", verifierToken, autoriser(['admin', 'prof']), livreRules, updateLivre)
    // .delete("/:id", verifierToken, autoriser(['admin']), deleteLivreById)


export default routeLivre