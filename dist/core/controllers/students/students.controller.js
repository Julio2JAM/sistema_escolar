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
const __database_1 = require("../../database/__database");
class StudentsController {
    constructor() { }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield __database_1.database.getConnection();
            const query = 'SELECT * FROM students';
            const result = yield conn.query(query).catch((err) => {
                console.log('err query students', err);
                return {
                    message: 'No students found',
                    status: 404,
                };
            });
            res.status(200).json(result);
        });
    }
}
exports.StudentsController = StudentsController;
