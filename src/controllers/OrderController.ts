import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { IProducts } from '../interfaces/Order';

const createOrder = async (req: Request, res: Response):Promise<void> => {
  const { products } = req.body;
  
  const orders: IProducts = await OrderService.createOrder(products, res.locals[0].id);

  res.status(201).json(orders);
};

const findAll = async (req: Request, res: Response):Promise<void> => {
  const orders = await OrderService.findAll();

  res.status(200).json(orders);
};

const findById = async (req: Request, res: Response):Promise<void> => {
  const { id } = req.params;
  const orders = await OrderService.findById(Number(id));

  res.status(200).json(orders);
};

export default {
  createOrder,
  findAll,
  findById,
};