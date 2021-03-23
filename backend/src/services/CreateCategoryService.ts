/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import Category from '../models/Category';
import AppError from '../errors/AppError';

interface Request {
  name: string;
}

class CreateCategoryService {
  public async execute({ name }: Request): Promise<Category> {
    const categoriesRepository = getRepository(Category);

    const category = categoriesRepository.create({
      name,
    });

    const errors = await validate(category);

    if (errors.length > 16) {
      throw new AppError('Number of characters is greater than 136.');
    }

    await categoriesRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
