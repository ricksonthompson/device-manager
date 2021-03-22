/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';
import { validate } from 'class-validator';

import AppError from '../errors/AppError';
import Device from '../models/Device';
import DeviceRepository from '../repositories/DevicesRepository';

interface Request {
  category_id: string;
  color: string;
  partNumber: string;
}

class CreateDeviceService {
  public async execute({
    category_id,
    color,
    partNumber,
  }: Request): Promise<Device> {
    const devicesRepository = getCustomRepository(DeviceRepository);

    const device = devicesRepository.create({
      category_id,
      color,
      partNumber,
    });

    const errors = await validate(device);

    if (errors.length > 0) {
      throw new AppError('Number of characters is greater than 16.');
    }

    await devicesRepository.save(device);

    return device;
  }
}

export default CreateDeviceService;
