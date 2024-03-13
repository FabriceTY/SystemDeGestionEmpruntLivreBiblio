import { Router } from "express";

import { login } from "../authentification/login.js";

import loginRules from "../validations/validationLogin.js";

const routeAuthentification =Router()

routeAuthentification.post('/',loginRules, login)
//routeAuthentification.get('/',login)

export default routeAuthentification