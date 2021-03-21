import { EntityRepository, Repository } from 'typeorm';

import Device from '../models/Device';

@EntityRepository(Device)
class DeviceRepository extends Repository<Device> {}

export default DeviceRepository;
