import express from "express";
import { DiariesController } from "../controllers/diaries/diaries.controller";
const router = express.Router();


const diariesController = new DiariesController();

router.get('/diaries', diariesController.getAll);

router.post('/diaries', diariesController.save);

export const diariesRoutes = router;