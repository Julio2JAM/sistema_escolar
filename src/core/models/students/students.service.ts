import { getRepository } from '../../database/database';
import { Students } from './students.entity';

export class StudentsService {
	private readonly studentsRepository = getRepository(Students);
	constructor() {}

	async getAll(): Promise<Students[]> {
		console.log('getting all students...');
		return await this.studentsRepository.find();
	}
}
