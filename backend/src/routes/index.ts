import { Router } from 'express';

import devicesRouter from './devices.routes';
import categoriesRouter from './categories.routes';
import CategoryController from '../controllers/CategoryController';
import DeviceController from '../controllers/DeviceController';

const routes = Router();

routes.use('/devices', devicesRouter);
routes.delete('/devices/:id', DeviceController.destroy);
routes.use('/categories', categoriesRouter);
routes.delete('/categories/:id', CategoryController.destroy);

export default routes;
