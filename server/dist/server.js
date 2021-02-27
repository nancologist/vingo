"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.use(body_parser_1.default.json());
// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' });
app.use(helmet_1.default());
app.use(morgan_1.default('combined', { stream: accessLogStream }));
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const PORT = process.env.PORT || 8080;
const CLIENT_SERVER = process.env.CLIENT_SERVER || 'http://localhost:3000';
const httpServer = app.listen(PORT, () => {
    console.log(`Vingo-Server: Listening on port ${PORT}`);
});
const io = require("socket.io")(httpServer, {
    cors: {
        origin: CLIENT_SERVER,
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
