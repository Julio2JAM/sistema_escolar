import express from 'express';
import { StudentsController } from './students.controller';
const router = express.Router();

const controller = new StudentsController();

router.get('/students', controller.getAll);
router.get('/students/:id', controller.getById);
router.post('/students', controller.create);
router.put('/students', controller.update);

export const studentsRouter = router;
