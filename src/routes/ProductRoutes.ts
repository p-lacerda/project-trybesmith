import { Router } from 'express';

import ProductController from '../controllers/ProductController';

import {
  nameValidation,
  amountValidation,
} from '../middlewares/ProductMiddleware';

import jwtValidations from '../middlewares/jwtValidations';

const router = Router();

router.post('/products', [jwtValidations.validateToken,
  nameValidation, amountValidation, ProductController.createProduct]);

router.get('/products', [jwtValidations.validateToken, ProductController.findAll]);

export default router;