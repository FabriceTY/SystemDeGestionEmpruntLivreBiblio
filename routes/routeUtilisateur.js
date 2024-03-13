//Importer le router
import { Router } from "express";
import { utilisateurList, getUtilisateurById, addUtilisateur, deleteUtilisateurById, updateUtilisateur } from '../controllers/utilisateur.js'

//Importer les regles de validations
import utilisateurRules from "../validations/validationUtilisateur.js";

//Protection des routes
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

//Instance de router
const routeUtilisateur = Router()

routeUtilisateur
    .get("/",verifierToken, utilisateurList)
    .get("/:id",getUtilisateurById)
    //.post("/", verifierToken, autoriser(['admin']), utilisateurRules, addUtilisateur)
    .post("/", verifierToken,addUtilisateur)
    //.put("/:id", verifierToken, autoriser(['admin', 'prof']), utilisateurRules, updateUtilisateur)
    .put("/:id", updateUtilisateur)
    .delete("/:id", verifierToken, autoriser(['admin']), deleteUtilisateurById)


export default routeUtilisateur