import { Request, Response } from "express";
import { DtoDiariesData } from "./diaries.schema";

export class DiariesController {

    constructor() {
        
    }

    getAll(req: Request, res: Response){
        console.log(req);
        res.status(200).json({
            "message": "hello world",
            "status": 200,
        })
    }

    save(req: Request, res: Response){
        const result = DtoDiariesData(req.body);
        if(!result.success){
            return res.status(400).json(result.error.errors)
        }

        console.log(req.body);
            return res.status(200).json({
            "message": "datos guardados.",
            "status": 200,
        })
    }
}