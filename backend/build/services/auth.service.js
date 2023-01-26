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
exports.loginService = exports.registerService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_model_1 = __importDefault(require("../models/admin.model"));
const auth_config_1 = __importDefault(require("../config/auth.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminTable = new admin_model_1.default;
const registerService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = bcrypt_1.default.hashSync(user.admin_password + auth_config_1.default.paper, auth_config_1.default.round);
        user.admin_password = hashedPassword;
        const data = yield adminTable.addAdmin(user);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.registerService = registerService;
const loginService = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield adminTable.getAdmin(credentials.admin_username);
        if (!admin)
            throw new Error("admin not found");
        // compare password hash
        const isPasswordMatch = yield bcrypt_1.default.compare(credentials.admin_password + auth_config_1.default.paper, admin.admin_password);
        if (!isPasswordMatch)
            throw new Error("Invalid email or password");
        // generate token
        const token = generateToken(admin);
        const authData = {
            user: {
                admin_id: Number(admin.admin_id),
                admin_username: admin.admin_username
            },
            token
        };
        return authData;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.loginService = loginService;
const generateToken = (admin) => {
    try {
        const payload = { sub: admin.admin_username, id: Number(admin.admin_id) };
        return jsonwebtoken_1.default.sign(payload, auth_config_1.default.jwtSecret, { expiresIn: '10d', issuer: 'dailynews' });
    }
    catch (error) {
        throw new Error(error);
    }
};
