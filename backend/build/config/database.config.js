"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { dev, port, DB_PORT, DB_NAME, DB_PASSWORD, DB_USER, DB_NAME_TEST, DB_HOST } = process.env;
exports.default = {
    dev,
    port,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_NAME_TEST,
    DB_HOST
};
