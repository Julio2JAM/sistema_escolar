"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
const students_service_1 = require("./students.service");
class StudentsController {
    constructor() { }
    getAll(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new students_service_1.StudentsService();
            const students = yield service.getAll();
            if (students.length === 0) {
                return res.status(404).json({
                    message: 'No students found',
                    status: 404,
                });
            }
            return res.status(200).json(students);
        });
    }
}
exports.StudentsController = StudentsController;
