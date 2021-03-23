/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';

import Device from '../models/Device';
import DeviceRepository from '../repositories/DevicesRepository';

interface Request {
  category_id: number;
  color: string;
  partNumber: number;
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

    await devicesRepository.save(device);

    return device;
  }
}

export default CreateDeviceService;
