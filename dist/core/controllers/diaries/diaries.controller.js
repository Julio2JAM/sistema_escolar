"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiariesController = void 0;
const diaries_schema_1 = require("./diaries.schema");
class DiariesController {
    constructor() {
    }
    getAll(req, res) {
        console.log(req);
        res.status(200).json({
            "message": "hello world",
            "status": 200,
        });
    }
    save(req, res) {
        const result = (0, diaries_schema_1.DtoDiariesData)(req.body);
        if (!result.success) {
            return res.status(400).json(result.error.errors);
        }
        console.log(req.body);
        return res.status(200).json({
            "message": "datos guardados.",
            "status": 200,
        });
    }
}
exports.DiariesController = DiariesController;
