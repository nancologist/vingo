import fs from 'fs';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { Socket } from 'socket.io';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.json());

// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
);

app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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

io.on('connection', (socket: Socket) => {
    socket.on('TAKE_SQUARE', (x, y) => {
        // OPP: abbreviation for Opponent
        socket.broadcast.emit('OPP_SQUARE', x, y);
    });

    socket.on('SET_NAME', (name) => {
        socket.broadcast.emit('OPP_NAME', name);
    });
});
