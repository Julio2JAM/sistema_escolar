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

	async getById(req: Request, res: Response): Promise<any> {
		const id = req.params.id;

		if(!id){
			return res.status(400).json({
				message: "El ID es requerida.",
				status: 400
			})
		}
		
		const service = new StudentsService();
		const students = await service.getById(Number(id));

		if (students.length === 0) {
			return res.status(404).json({
				message: 'No students found',
				status: 404,
			});
		}

		return res.status(200).json(students[0]);
	}

	async create(req: Request, res: Response): Promise<any> {
		const student = req.body;

		if(!student){
			return res.status(400).json({
				message: "La data es requerida.",
				status: 400
			})
		}
		
		const service = new StudentsService();
		const newStudent = await service.create(student);

		if (!newStudent) {
			return res.status(404).json({
				message: 'No student found',
				status: 404,
			});
		}

		return res.status(200).json(newStudent);
	}

	async update(req: Request, res: Response): Promise<any> {

		const {id} = req.body;
		if(!id){
			return res.status(400).json({
				message: "El ID es requerida.",
				status: 400
			})
		}

		const service = new StudentsService();
		const studentToUpdate = await service.getById(Number(id));
		
		if(req.body.phone){
			studentToUpdate[0].phone = req.body.phone;
		}

		if(req.body.firstname){
			studentToUpdate[0].firstname = req.body.firstname;
		}

		if(req.body.lastname){
			studentToUpdate[0].lastname = req.body.lastname;
		}
		
		const result = await service.update(studentToUpdate[0]);		

		if (!studentToUpdate) {
			return res.status(404).json({
				message: 'No student found',
				status: 404,
			});
		}

		return res.status(200).json(result);
	}
}
