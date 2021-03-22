/* eslint-disable camelcase */
import { Router } from 'express';

// import DeviceRepository from '../repositories/DevicesRepository';
import CreateDeviceService from '../services/CreateDeviceService';

const devicesRouter = Router();

devicesRouter.get('/', (_request, response) => {
  return response.json({ ok: true });
});

devicesRouter.post('/', async (request, response) => {
  const { category_id, color, partNumber } = request.body;

  const createDevice = new CreateDeviceService();

  const device = await createDevice.execute({
    category_id,
    color,
    partNumber,
  });

  return response.json(device);
});

export default devicesRouter;
