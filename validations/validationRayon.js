import { body, check, param } from "express-validator";
const rayonRules = [
    body('nomRayon').notEmpty().withMessage("le nom ne peut pas etre vide"),
    body('descriptionRayon').optional().isLength({ min: 5 }).withMessage('la description doit contenir au moins 5 caracteres'),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default rayonRules