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
exports.removeProduct = exports.addProduct = exports.getProduct = exports.getAllProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const productTable = new product_model_1.default;
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productTable.index();
        res.json({
            message: `success`,
            data
        });
    }
    catch (err) {
        throw new Error(`can not get products`);
    }
});
exports.getAllProduct = getAllProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const product = yield productTable.getProduct(Number(id));
        res.json({
            message: `success`,
            product
        });
    }
    catch (err) {
        throw new Error(`could not find product`);
    }
});
exports.getProduct = getProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_name, product_alt, product_img_url, product_catgory } = req.body;
        const productObj = yield productTable.addProduct({ product_name, product_img_url, product_alt, product_catgory });
        res.json({
            message: `success`,
            productObj
        });
    }
    catch (err) {
        throw new Error(`could not add product ${err}`);
    }
});
exports.addProduct = addProduct;
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const removedProduct = yield productTable.removeProduct(Number(id));
        res.json({
            message: `success`,
            removedProduct
        });
    }
    catch (err) {
        throw new Error(`can not remove product`);
    }
});
exports.removeProduct = removeProduct;
function* infinte() {
    let index = 55;
    while (true) {
        yield index++;
    }
}
let generator = infinte();
