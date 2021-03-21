import { Router } from 'express';

import devicesRouter from './devices.routes';

const routes = Router();

routes.use('/devices', devicesRouter);

export default routes;
