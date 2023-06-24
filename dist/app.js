"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const index_1 = require("./src/index");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    (0, index_1.init)();
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map