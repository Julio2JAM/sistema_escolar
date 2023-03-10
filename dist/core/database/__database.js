"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.Database = void 0;
const mariadb_1 = require("mariadb");
const enviroments_const_1 = require("../../global/constants/enviroments.const");
class Database {
    constructor() { }
    static get instance() {
        if (!Database._instance) {
            Database._instance = new Database();
            Database._instance.createConnection();
        }
        return Database._instance;
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Database.pool.getConnection();
        });
    }
    createConnection() {
        Database.pool = (0, mariadb_1.createPool)({
            host: enviroments_const_1.DATABASE.HOST,
            password: enviroments_const_1.DATABASE.PASSWORD,
            database: enviroments_const_1.DATABASE.NAME,
            port: Number(enviroments_const_1.DATABASE.PORT),
            user: enviroments_const_1.DATABASE.USER,
        });
    }
}
exports.Database = Database;
exports.database = Database.instance;
