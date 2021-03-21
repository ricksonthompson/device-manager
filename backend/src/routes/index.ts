import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// segundo parâmetro é o arquivo de rotas de agendamentos
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
