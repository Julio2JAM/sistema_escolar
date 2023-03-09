"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const students_controller_1 = require("../controllers/students/students.controller");
const router = express_1.default.Router();
const controller = new students_controller_1.StudentsController();
router.get('/students', controller.getAll);
exports.studentsRouter = router;
