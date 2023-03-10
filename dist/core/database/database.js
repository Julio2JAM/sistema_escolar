"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepository = exports.database = void 0;
// import { Sequelize } from 'sequelize';
const typeorm_1 = require("typeorm");
const enviroments_const_1 = require("../../global/constants/enviroments.const");
// export const database = new Sequelize({
// 	host: DATABASE.HOST,
// 	port: Number(DATABASE.PORT),
// 	database: DATABASE.NAME,
// 	dialect: 'mysql',
// 	username: DATABASE.USER,
// 	password: DATABASE.PASSWORD,
// });
exports.database = new typeorm_1.DataSource({
    type: 'mariadb',
    host: enviroments_const_1.DATABASE.HOST,
    port: Number(enviroments_const_1.DATABASE.PORT),
    username: enviroments_const_1.DATABASE.USER,
    password: enviroments_const_1.DATABASE.PASSWORD,
    database: enviroments_const_1.DATABASE.NAME,
    synchronize: true,
    logging: true,
    entities: ['**/*.entity.js'],
    subscribers: [],
    migrations: [],
});
const getRepository = (repo) => {
    return exports.database.getRepository(repo);
};
exports.getRepository = getRepository;
