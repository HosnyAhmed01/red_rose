"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_conteroller_1 = require("../controlers/auth.conteroller");
const authRouter = (0, express_1.Router)();
authRouter.post('/addadmin', auth_conteroller_1.registerController);
authRouter.post('/getadmin', auth_conteroller_1.loginController);
exports.default = authRouter;
