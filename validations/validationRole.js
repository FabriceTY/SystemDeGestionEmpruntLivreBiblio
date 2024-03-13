import { body, check, param } from "express-validator";
const roleRules = [
    body('nomRole').notEmpty().withMessage("le nom ne peut pas etre vide"),
    body('descriptionRole').optional().isLength({ min: 20 }).withMessage('la description doit contenir au moins 20 caracteres'),
    body('typeRole').optional().isLength({ min: 2 }).withMessage('le type de role doit contenir au moins 2 caracteres'),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default roleRules