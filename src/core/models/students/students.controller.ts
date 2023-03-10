import { Request, Response } from 'express';
import { StudentsService } from './students.service';

export class StudentsController {
	constructor() {}

	async getAll(_: Request, res: Response): Promise<any> {
		const service = new StudentsService();
		const students = await service.getAll();

		if (students.length === 0) {
			return res.status(404).json({
				message: 'No students found',
				status: 404,
			});
		}

		return res.status(200).json(students);
	}
}
