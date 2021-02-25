"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(body_parser_1.default.json());
app.use('/', routes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const server = app.listen(8080, () => {
    console.log('Listening on port 8080');
});
exports.io = require('socket.io')(server);
exports.io.on('connection', () => {
    console.log('A client is connected.');
});
