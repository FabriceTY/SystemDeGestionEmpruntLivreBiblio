import { body, param } from "express-validator";

const empruntRules = [    
    body('dateEmprunt').isISO8601().withMessage('la date est incorrecte'),
    body('datePrevueRetourEmprunt').isISO8601().withMessage('la date est incorrecte'),
    body('dateEffectiveRetour').isISO8601().withMessage('la date est incorrecte'),
    
    body('utilisateurId').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")

]

export default empruntRules