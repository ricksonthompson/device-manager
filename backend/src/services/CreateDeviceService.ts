/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';

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
    const DevicesRepository = getCustomRepository(DeviceRepository);

    const device = DevicesRepository.create({
      category_id,
      color,
      partNumber,
    });

    await DevicesRepository.save(device);

    return device;
  }
}

export default CreateDeviceService;
