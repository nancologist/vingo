import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();

// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use('/', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

const server = app.listen(8080, () => {
    console.log('Listening on port 8080');
});

export const io = require('socket.io')(server);
io.on('connection', () => {
    console.log('A client is connected.');
});