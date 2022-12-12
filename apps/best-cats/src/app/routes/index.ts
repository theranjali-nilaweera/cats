
import { Router } from 'express';
import { catRouter } from '../cat/index';

export const routes = Router();

routes.use('/', catRouter);
