import { Response } from 'express';
import OrderService from '../services/OrderService';

const createOrder = async (req: any, res: Response):Promise<void> => {
  const { products } = req.body;
  
  const orders = await OrderService.createOrder(products, req.user[0].id);

  res.status(201).json(orders);
};

export default {
  createOrder,
};