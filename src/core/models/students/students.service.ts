import { getRepository } from '../../database/database';
import { Students } from './students.entity';

export class StudentsService {
	private readonly studentsRepository = getRepository(Students);
	constructor() {}

	async getAll(): Promise<Students[]> {
		console.log('getting all students...');
		return await this.studentsRepository.find();
	}

	async getById(id:number): Promise<Students[]> {
		console.log('getting by id...');
		return await this.studentsRepository.findBy({id});
	}

	async create(student:Students): Promise<Students> {
		console.log('creating a register...');
		return await this.studentsRepository.save(student);
	}

	async edit(student:Students): Promise<Students>{
		console.log('updating a register...');
		return await this.studentsRepository.save(student);
	}
}
