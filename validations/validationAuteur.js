import { body, check, param } from "express-validator";
const auteurRules = [
    body('nomAuteur').notEmpty().withMessage("le nom ne peut pas etre vide"),
    body('sexeAuteur').notEmpty().withMessage('la valeur est incorrecte'),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default auteurRules