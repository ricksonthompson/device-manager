/* eslint-disable camelcase */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { body, validationResult } from 'express-validator';

import DeviceRepository from '../repositories/DevicesRepository';
import CreateDeviceService from '../services/CreateDeviceService';

const devicesRouter = Router();

devicesRouter.get('/', async (request, response) => {
  const devicesRepository = getCustomRepository(DeviceRepository);
  const devices = await devicesRepository.find();

  return response.json(devices);
});

devicesRouter.post(
  '/',
  [body('color').isAlpha(), body('partNumber').isInt()],
  async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.json({ errors: errors.array() });
    }

    const { category_id, color, partNumber } = request.body;

    const createDevice = new CreateDeviceService();

    const device = await createDevice.execute({
      category_id,
      color,
      partNumber,
    });

    return response.json(device);
  },
);

devicesRouter.delete('/', async (request, response) => {
  const { id } = request.params;

  const device_id = { id };

  const devicesRepository = getCustomRepository(DeviceRepository);

  await devicesRepository.delete(device_id);

  return response.json({ msg: 'Device excluído com sucesso!' });
});

export default devicesRouter;
