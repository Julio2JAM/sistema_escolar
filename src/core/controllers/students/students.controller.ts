import { Request, Response } from 'express';
import { database } from '../../database/database';

export class StudentsController {
	constructor() {}

	async getAll(req: Request, res: Response) {
		const conn = await database.getConnection();

		const query = 'SELECT * FROM students';

		const result = await conn.query(query).catch((err) => {
			console.log('err query students', err);
			return {
				message: 'No students found',
				status: 404,
			};
		});

		res.status(200).json(result);
	}
}
