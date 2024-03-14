import { body, check, param } from "express-validator";
const auteurRules = [
    body('nomAuteur').isString().notEmpty().withMessage("le nom ne peut pas etre vide et doit etre une chaine"),
    //body('sexeAuteur').notEmpty().isIn('M','m','F','f').withMessage('la valeur du sexe de'),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default auteurRules