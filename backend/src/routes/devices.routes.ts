/* eslint-disable camelcase */
import { Router, Request, Response } from 'express';
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
  async (request: Request, response: Response) => {
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

export default devicesRouter;
