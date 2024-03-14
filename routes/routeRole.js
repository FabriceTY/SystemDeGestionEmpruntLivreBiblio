//Importer le router
import { Router } from "express";
import { roleList, getRoleById, addRole, deleteRoleById, updateRole } from '../controllers/role.js'

//Importer les regles de validations
import roleRules from "../validations/validationRole.js";

//Protection des routes
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

//Instance de router
const routeRole = Router()

routeRole
    .get("/",verifierToken, roleList)
    .get("/:id",verifierToken, getRoleById)
    .post("/",verifierToken, autoriser(['admin']), roleRules, addRole)
    .put("/:id", verifierToken, autoriser(['admin']),roleRules, updateRole)
    .delete("/:id",verifierToken, autoriser(['admin']),deleteRoleById)
    /*.get("/", verifierToken, roleList)
    .get("/:id", verifierToken,getRoleById)
    .post("/", verifierToken, autoriser(['admin']), roleRules, addRole)
    .put("/:id", verifierToken, autoriser(['admin', 'prof']), roleRules, updateRole)
    .delete("/:id", verifierToken, autoriser(['admin']), deleteRoleById)*/


export default routeRole