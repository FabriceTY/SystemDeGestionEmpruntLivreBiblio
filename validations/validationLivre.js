import { body, param } from "express-validator";

//Regex pour le nom et prenom
const nameRegex =/^[a-zA-Z\s-']+$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

const livreRules = [
    body('nomLivre').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('nombrePageLivre').optional().isInt({min:1}).withMessage("le nombre de page doit etre un entier positif"),
    body('auteurId').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    body('rayonId').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    body('utilisateurId').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")

]

export default livreRules