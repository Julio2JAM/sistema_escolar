"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = exports.APPLICATION = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.APPLICATION = {
    PORT: process.env.PORT || 4000,
};
exports.DATABASE = {
    PORT: process.env.DATABASE_PORT,
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USER,
    NAME: process.env.DATABASE_NAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
};
