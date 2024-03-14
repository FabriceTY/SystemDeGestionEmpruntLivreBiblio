// importer la fontion route
import{Router} from "express";
// import les controllers pour la creation des routes
import {addsanction,sanctionList,removesanction,updatesanction} from "../Controllers/sanctioncontrollers.js";
import sanction from "../Modeles/sanction.js";
// importe les regles de validation
const router = Router()
router
.get("/", sanctionList)
.post("/",addsanction)
.delete("/:id",removesanction)
.put("/:id",updatesanction)

export default sanction