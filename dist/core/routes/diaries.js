"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diariesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const diaries_controller_1 = require("../controllers/diaries/diaries.controller");
const router = express_1.default.Router();
const diariesController = new diaries_controller_1.DiariesController();
router.get('/diaries', diariesController.getAll);
router.post('/diaries', diariesController.save);
exports.diariesRoutes = router;
