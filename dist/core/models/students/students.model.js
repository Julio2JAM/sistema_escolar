"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../database/database");
// export class Students extends Model {}
// Students.init({
// }, {sequelize:database})
exports.Students = database_1.database.define('students', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
});
