import 'reflect-metadata';

import express, { Request, Response, NextFunction, request } from 'express';
import 'express-async-errors';

import routes from './routes/index';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

// Deve ser declarado em baixo das rotas
app.use(( err: Error, request: Request, response: Response, _: NextFunction ) => {
  // Se for um erro conhecido pela aplicação
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  // Se for um erro desconhecido na aplicação
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
})

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
