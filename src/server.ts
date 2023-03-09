import { Application } from './app';
import { database } from './core/database/database';

import './core/models/index';

const bootstrap = async () => {
	const application = new Application();

	await database.authenticate().catch((error) => {
		console.log('Error database authentication', error);
	});

	await database.sync().catch((error) => {
		console.log('Error syncing database', error);
	});

	application.initApplication();
};

bootstrap();
