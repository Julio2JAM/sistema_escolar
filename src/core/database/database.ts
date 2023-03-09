import { Pool, PoolConnection, createPool } from 'mariadb';
import { DATABASE } from '../../global/constants/enviroments.const';

export class Database {
	private static _instance: Database;
	private static pool: Pool;

	private constructor() {}

	static get instance(): Database {
		if (!Database._instance) {
			Database._instance = new Database();
			Database._instance.createConnection();
		}

		return Database._instance;
	}

	async getConnection(): Promise<PoolConnection> {
		return await Database.pool.getConnection();
	}

	private createConnection() {
		Database.pool = createPool({
			host: DATABASE.HOST,
			password: DATABASE.PASSWORD,
			database: DATABASE.NAME,
			port: Number(DATABASE.PORT),
			user: DATABASE.USER,
		});
	}
}

export const database = Database.instance;
