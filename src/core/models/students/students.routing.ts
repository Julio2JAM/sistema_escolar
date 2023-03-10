import express from 'express';
import { StudentsController } from './students.controller';
const router = express.Router();

const controller = new StudentsController();

router.get('/students', controller.getAll);

export const studentsRouter = router;
