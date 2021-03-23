import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Device from '../models/Device';

const destroy = async (request: Request, response: Response) => {
  return response.json(await getRepository(Device).delete(request.params.id));
};

export default { destroy };
