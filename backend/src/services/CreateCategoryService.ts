/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';

import Category from '../models/Category';
import CategoryRepository from '../repositories/CategoriesRepository';

interface Request {
  name: string;
}

class CreateCategoryService {
  public async execute({ name }: Request): Promise<Category> {
    const CategoriesRepository = getCustomRepository(CategoryRepository);

    const category = CategoriesRepository.create({
      name,
    });

    await CategoriesRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
