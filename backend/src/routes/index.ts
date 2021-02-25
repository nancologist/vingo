import express from 'express';
import { postCoords } from '../controllers/index';

const router = express.Router();
router.post('/square/coords', postCoords);

export default router;