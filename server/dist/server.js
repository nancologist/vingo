"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import router from './routes/routes';
const app = express_1.default();
app.use(body_parser_1.default.json());
// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// app.use('/', router);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const httpServer = app.listen(8080, () => {
    console.log('Listening on port 8080');
});
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    },
});
io.on('connection', (socket) => {
    socket.on('TAKE_SQUARE', (x, y) => {
        // OPP: abbreviation for Opponent
        socket.broadcast.emit('OPP_SQUARE', x, y);
    });
    socket.on('SET_NAME', (name) => {
        socket.broadcast.emit('OPP_NAME', name);
    });
});
