/* eslint-disable camelcase */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import DeviceRepository from '../repositories/DevicesRepository';
import CreateDeviceService from '../services/CreateDeviceService';

const devicesRouter = Router();

devicesRouter.get('/', async (request, response) => {
  const devicesRepository = getCustomRepository(DeviceRepository);
  const devices = await devicesRepository.find();

  return response.json(devices);
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
