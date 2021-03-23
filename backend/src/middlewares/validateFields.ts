import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export default function validateFields(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  body('color').isAlpha();
  body('partNumber').isInt();

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    throw new Error('Invalid JWT token.');
  }
  return next();
}
