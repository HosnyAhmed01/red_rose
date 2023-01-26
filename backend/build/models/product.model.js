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
class ProductsModel {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM products`;
            const res = yield conn.query(sql);
            conn.release();
            return yield (res).rows;
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM products WHERE product_id=$1`;
            const res = yield (conn).query(sql, [id]);
            conn.release();
            return yield (res).rows[0];
        });
    }
    removeProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `DELETE  FROM products WHERE product_id=$1`;
            const res = yield conn.query(sql, [id]);
            conn.release();
            return yield (res).rows[0];
        });
    }
    addProduct(P) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `INSERT INTO products(product_name, product_img_url , product_alt , product_catgory) VALUES ($1,$2,$3 ,$4)`;
            const res = yield conn.query(sql, [P.product_name, P.product_img_url, P.product_alt, P.product_catgory]);
            conn.release();
            return yield (res).rows[0];
        });
    }
}
exports.default = ProductsModel;
