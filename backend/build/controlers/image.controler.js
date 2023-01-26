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
exports.uploadImage = void 0;
const path_1 = __importDefault(require("path"));
const product_model_1 = __importDefault(require("../models/product.model"));
const productTable = new product_model_1.default;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image_name } = req.query;
        res.sendFile(`${path_1.default.resolve()}/src/resizedImage/${image_name}`);
    }
    catch (err) {
        throw new Error(`could not get image`);
    }
});
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.files;
        const { product_name, product_alt, product_catgory } = req.body;
        if (!file) {
            res.status(400).send(`no file uploaded`);
        }
        const image = req.files.image;
        const extension = image.name.split('.');
        const uploadPath = `${path_1.default.resolve()}/src/resizedImage/red_rose_${generator.next().value}.${extension[extension.length - 1]}`;
        const upload_path_arr = uploadPath.split('/');
        const new_product = yield productTable.addProduct({ product_name,
            product_alt, product_img_url: `http://localhost:3000/images/getimage?image_name=${upload_path_arr[upload_path_arr.length - 1]}`, product_catgory });
        image.mv(uploadPath, (err) => {
            if (!err) {
                res.status(500).send(err);
            }
        });
        res.json({
            message: 'success',
            new_product
        });
    }
    catch (err) {
        throw new Error(`could not update image  ${err}`);
    }
});
exports.uploadImage = uploadImage;
function* infinte() {
    let index = 55;
    while (true) {
        yield index++;
    }
}
let generator = infinte();
exports.default = getImage;
