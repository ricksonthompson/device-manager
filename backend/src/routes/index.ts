import { Router } from 'express';

import devicesRouter from './devices.routes';
import categoriesRouter from './categories.routes';

const routes = Router();

routes.use('/devices', devicesRouter);
routes.use('/devices/:id', devicesRouter);
routes.use('/categories', categoriesRouter);
routes.use('/categories/:id', categoriesRouter);

export default routes;
