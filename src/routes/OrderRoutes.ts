import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import jwtValidations from '../middlewares/jwtValidations';
import OrderMiddleware from '../middlewares/OrderMiddleware';

const router = Router();

router.post('/orders', [
  jwtValidations.validateToken, OrderMiddleware.productsValidation, OrderController.createOrder]);
router.get('/orders', jwtValidations.validateToken, OrderController.findAll);
router.get('/orders/:id', jwtValidations.validateToken, OrderController.findById);

export default router;