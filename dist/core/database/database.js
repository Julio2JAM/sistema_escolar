"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const enviroments_const_1 = require("../../global/constants/enviroments.const");
exports.database = new sequelize_1.Sequelize({
    host: enviroments_const_1.DATABASE.HOST,
    port: Number(enviroments_const_1.DATABASE.PORT),
    database: enviroments_const_1.DATABASE.NAME,
    dialect: 'mysql',
    username: enviroments_const_1.DATABASE.USER,
    password: enviroments_const_1.DATABASE.PASSWORD,
});
