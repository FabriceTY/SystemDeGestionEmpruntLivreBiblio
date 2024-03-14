//Importer le router
import { Router } from "express";
import { rayonList, getRayonById, addRayon, deleteRayonById, updateRayon } from '../controllers/rayon.js'

//Importer les regles de validations
import rayonRules from "../validations/validationRayon.js";

//Protection des routes
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

//Instance de router
const routeRayon = Router()

routeRayon
    .get("/", rayonList)
    .get("/:id", getRayonById)
    .post("/", rayonRules, addRayon)
    .put("/:id", rayonRules, updateRayon)
    .delete("/:id",verifierToken, autoriser(['admin']), deleteRayonById)
    // .get("/", verifierToken, rayonList)
    // .get("/:id", verifierToken,getRayonById)
    // .post("/", verifierToken, autoriser(['admin']), rayonRules, addRayon)
    // .put("/:id", verifierToken, autoriser(['admin', 'prof']), rayonRules, updateRayon)
    // .delete("/:id", verifierToken, autoriser(['admin']), deleteRayonById)


export default routeRayon