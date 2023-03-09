import { config } from 'dotenv';

config();

export const APPLICATION = {
	PORT: process.env.PORT || 4000,
};

export const DATABASE = {
	PORT: process.env.DATABASE_PORT,
	HOST: process.env.DATABASE_HOST,
	USER: process.env.DATABASE_USER,
	NAME: process.env.DATABASE_NAME,
	PASSWORD: process.env.DATABASE_PASSWORD,
};
