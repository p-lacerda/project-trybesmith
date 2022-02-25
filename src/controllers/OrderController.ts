import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { IProducts } from '../interfaces/Order';

const createOrder = async (req: Request, res: Response):Promise<void> => {
  const { products } = req.body;
  
  const orders: IProducts = await OrderService.createOrder(products, res.locals[0].id);

  res.status(201).json(orders);
};

export default {
  createOrder,
};