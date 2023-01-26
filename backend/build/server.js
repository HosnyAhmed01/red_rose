"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const products_router_1 = __importDefault(require("./router/products.router"));
const image_router_1 = __importDefault(require("./router/image.router"));
const body_parser_1 = __importDefault(require("body-parser"));
const admin_router_1 = __importDefault(require("./router/admin.router"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.port || 5000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)());
app.use('/product', products_router_1.default);
app.use('/images', image_router_1.default);
app.use('/admin', admin_router_1.default);
app.listen(port, () => {
    console.log(`app is runing on http://localhost:${port}`);
});
