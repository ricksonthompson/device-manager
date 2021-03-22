import { Router } from 'express';

import devicesRouter from './devices.routes';
import categoriesRouter from './categories.routes';

const routes = Router();

routes.use('/devices', devicesRouter);
routes.use('/categories', categoriesRouter);

export default routes;
