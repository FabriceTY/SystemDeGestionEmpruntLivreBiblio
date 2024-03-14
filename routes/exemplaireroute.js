// importer la fontion route
import{Router} from "express";
// import les controllers pour la creation des routes
import {addexemplaire,exemplaireList,removeexemplaire,updateexemplaire} from "../Controllers/exemplairecontrollers.js";
// importe les regles de validation
const router = Router()
router
.get("/", exemplaireList)
.post("/",addexemplaire)
.delete("/:id",removeexemplaire)
.put("/:id",updateexemplaire)

export default router