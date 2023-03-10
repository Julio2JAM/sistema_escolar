import { Application } from './app';
import { database } from './core/database/database';

import './core/models/index';

const bootstrap = async () => {
	const application = new Application();

	await database.initialize().catch((error) => {
		console.log('Error initializing database', error);
	});

	application.initApplication();
};

bootstrap();
