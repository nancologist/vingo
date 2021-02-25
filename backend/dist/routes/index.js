"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const coords_1 = require("../controllers/coords");
const router = express_1.default.Router();
router.post('/square/coords', coords_1.postCoords);
exports.default = router;
