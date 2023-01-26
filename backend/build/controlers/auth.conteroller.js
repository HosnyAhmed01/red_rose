"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const auth_service_1 = require("../services/auth.service");
const auth_service_2 = require("../services/auth.service");
const admin_model_1 = __importDefault(require("../models/admin.model"));
const adminTable = new admin_model_1.default;
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { admin_username, admin_password } = req.body;
        const data = yield (0, auth_service_1.registerService)({ admin_password, admin_username });
        res.json({
            messege: "user created",
            data: data
        });
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { admin_username, admin_password } = req.body;
        console.log({ admin_username, admin_password });
        const data = yield (0, auth_service_2.loginService)({ admin_username, admin_password });
        res.status(200)
            .json({
            messege: "loged in",
            data: data
        });
    }
    catch (err) {
        throw new Error(`can not login please try again ${err}`);
    }
});
exports.loginController = loginController;
