import { Sequelize } from 'sequelize';
import { DATABASE } from '../../global/constants/enviroments.const';

export const database = new Sequelize({
	host: DATABASE.HOST,
	port: Number(DATABASE.PORT),
	database: DATABASE.NAME,
	dialect: 'mysql',
	username: DATABASE.USER,
	password: DATABASE.PASSWORD,
});
