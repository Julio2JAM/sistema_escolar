import express from 'express';
import cors from 'cors';
import * as routes from './core/routes';

// CONSTANTS //
import { APPLICATION } from './global/constants/enviroments.const';

export class Application {
	private readonly app: express.Application = express();

	constructor() {}

	initApplication(): express.Application {
		// MIDDLEWARE //
		this.useMiddlewares();

		// ROUTES //
		this.useRoutes();

		this.app.listen(APPLICATION.PORT, () => {
			console.log('Listening on port ' + APPLICATION.PORT);
		});

		return this.app;
	}

	private useMiddlewares() {
		this.app.use(express.json());
		this.app.use(cors({ origin: '*' }));
	}

	private useRoutes() {
		this.app.use(routes.studentsRouter);
	}
}
