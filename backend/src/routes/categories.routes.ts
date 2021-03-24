/* eslint-disable camelcase */
import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { check, validationResult } from 'express-validator';

import CategoryRepository from '../repositories/CategoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  const categoriesRepository = getCustomRepository(CategoryRepository);
  const categories = await categoriesRepository.find();

  return response.json(categories);
});

categoriesRouter.post(
  '/',
  [
    check('name', 'Must not be empty.').notEmpty(),
    check('name', 'Number of characters exceeds 128.').isLength({ max: 128 }),
  ],
  async (request: Request, response: Response) => {
    const { name } = request.body;

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      const array: string[] = [];

      errors.array().forEach(e => array.push(e.msg));

      response.json({ mssg: array });
    }

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({
      name,
    });

    return response.json(category);
  },
);

export default categoriesRouter;
