/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import Category from '../models/Category';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  const categoriesRepository = getRepository(Category);
  const categories = await categoriesRepository.find();

  return response.json(categories);
});

categoriesRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createCategory = new CreateCategoryService();

  const category = await createCategory.execute({
    name,
  });

  return response.json(category);
});

categoriesRouter.delete('/', async (request, response) => {
  const categoriesRepository = getRepository(Category);

  await categoriesRepository.delete(request.params.id);

  return response.json('Ok');
});

export default categoriesRouter;
