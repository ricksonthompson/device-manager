/* eslint-disable camelcase */
import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { check, validationResult } from 'express-validator';

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
  [
    check('color', 'Only letters are allowed').isAlpha(),
    check('color', 'Number of characters must be greater than 4').isLength({
      min: 4,
    }),
    check('color', 'Number of characters exceeds 16').isLength({ max: 16 }),
    check('partNumber', 'Its not a positive whole field').isInt(),
  ],
  async (request: Request, response: Response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      const array: string[] = [];

      errors.array().forEach(e => array.push(e.msg));

      response.json({ mssg: array });
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
