"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser")); // accept json body in POST / PUT requests
const mongoose_1 = __importDefault(require("mongoose")); // mongodb access lib
const app = (0, express_1.default)();
// configure app globally to parse http request bodies as json
app.use(body_parser_1.default.json());
// db connection
const dbUri = process.env.DB;
mongoose_1.default.connect(dbUri)
    .then(() => { console.log('Connected to MongoDB'); })
    .catch((err) => { console.log(`Connection Failed: ${err.message}`); });
app.listen(4000, () => { console.log('Server running on port 4000'); });
