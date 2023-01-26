"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_1 = __importDefault(require("./config/database.config"));
const pg_1 = require("pg");
const client = new pg_1.Pool({
    database: database_config_1.default.DB_NAME,
    port: Number(database_config_1.default.DB_PORT),
    user: database_config_1.default.DB_USER,
    host: database_config_1.default.DB_HOST,
    password: database_config_1.default.DB_PASSWORD
});
exports.default = client;
