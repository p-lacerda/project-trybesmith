import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

const createOrder = async (req: Request, res: Response):Promise<void> => {
  const { products } = req.body;
  
  const orders = await OrderService.createOrder(products, res.locals[0].id);

  res.status(201).json(orders);
};

export default {
  createOrder,
};