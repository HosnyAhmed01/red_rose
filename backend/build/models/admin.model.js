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
const database_1 = __importDefault(require("../database"));
class AdminModel {
    getAdmin(admin_username) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM admins WHERE admin_username=$1`;
            const res = yield conn.query(sql, [admin_username]);
            conn.release();
            return yield (res).rows[0];
        });
    }
    addAdmin(A) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `INSERT INTO admins(admin_username , admin_password) VALUES ($1 , $2) RETURNING *`;
            const res = yield conn.query(sql, [A.admin_username, A.admin_password]);
            conn.release();
            return yield (res).rows[0];
        });
    }
}
exports.default = AdminModel;
