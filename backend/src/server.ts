import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { Socket } from 'socket.io';
// import router from './routes/routes';

const app = express();
app.use(bodyParser.json());

// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// app.use('/', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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

io.on('connection', (socket: Socket) => {
    console.log('A client is connected.');
    socket.on('TAKE_SQUARE', (x, y) => {
        // OPP: abbreviation for Opponent
        socket.broadcast.emit('OPP_SQUARE', x, y);
    });

});