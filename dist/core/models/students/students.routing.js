"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const students_controller_1 = require("./students.controller");
const router = express_1.default.Router();
const controller = new students_controller_1.StudentsController();
router.get('/students', controller.getAll);
router.get('/students/:id', controller.getById);
router.post('/students', controller.create);
router.put('/students', controller.update);
exports.studentsRouter = router;
