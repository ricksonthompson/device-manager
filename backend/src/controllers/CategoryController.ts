import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Category from '../models/Category';

const destroy = async (request: Request,response:Response) => {
  return response.json(await getRepository(Category).delete(request.params.id));
};

export default { destroy };
