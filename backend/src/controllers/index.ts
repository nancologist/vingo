import { RequestHandler } from 'express';

export const postCoords: RequestHandler = (req, res, next) => {
    console.log(req.body);
}