import { body, param } from "express-validator";

//Regex pour le nom et prenom
const nameRegex =/^[a-zA-Z\s-']+$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

//On peut aussi utiliser une regex pour le mot de passe
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const utilisateurRules = [
    body('nomUtilisateur').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('emailUtilisateur').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('motDePasseUtilisateur').isString()
        .isLength({ min: 8 }).withMessage('au moins 8 caracteres')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/[a-z]/).withMessage('au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractere special'),
    
    body('roleId').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")

]

export default utilisateurRules