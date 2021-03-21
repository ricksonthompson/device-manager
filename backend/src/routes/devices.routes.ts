import { request, Router } from 'express';

const devicesRouter = Router();

devicesRouter.get('/', (_request, response) => {
  return response.json({ ok: true });
});

export default devicesRouter;
