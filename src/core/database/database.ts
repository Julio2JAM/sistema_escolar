// import { Sequelize } from 'sequelize';
import { DataSource, EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { DATABASE } from '../../global/constants/enviroments.const';

// export const database = new Sequelize({
// 	host: DATABASE.HOST,
// 	port: Number(DATABASE.PORT),
// 	database: DATABASE.NAME,
// 	dialect: 'mysql',
// 	username: DATABASE.USER,
// 	password: DATABASE.PASSWORD,
// });

export const database = new DataSource({
	type: 'mariadb',
	host: DATABASE.HOST,
	port: Number(DATABASE.PORT),
	username: DATABASE.USER,
	password: DATABASE.PASSWORD,
	database: DATABASE.NAME,
	synchronize: true,
	logging: true,
	entities: ['**/*.entity.js'],
	subscribers: [],
	migrations: [],
});

export const getRepository = <T extends ObjectLiteral> (repo: EntityTarget<T>): Repository<T> => {
	return database.getRepository(repo);
};
