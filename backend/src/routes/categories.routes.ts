/* eslint-disable camelcase */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CategoryRepository from '../repositories/CategoriesRepository';
import Category from '../models/Category';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  const categoriesRepository = getCustomRepository(CategoryRepository);
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
  const { id } = request.params;

  const categories_id = { id };

  const categoriesRepository = getCustomRepository(CategoryRepository);

  await categoriesRepository.delete(categories_id);

  return response.json({ msg: 'Category excluído com sucesso!' });
});

export default categoriesRouter;
