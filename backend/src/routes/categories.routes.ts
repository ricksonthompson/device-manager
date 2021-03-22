/* eslint-disable camelcase */
import { Router } from 'express';

// import DeviceRepository from '../repositories/DevicesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', (_request, response) => {
  return response.json({ ok: true });
});

categoriesRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createCategory = new CreateCategoryService();

  const category = await createCategory.execute({
    name,
  });

  return response.json(category);
});

export default categoriesRouter;
