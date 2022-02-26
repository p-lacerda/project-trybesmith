import OrderModel from '../models/OrderModel';
import { IProducts } from '../interfaces/Order';

const createOrder = async (products: number[], id:number): Promise<IProducts> => {
  const orders = await OrderModel.createOrder(products, id);

  return orders;
};

const findAll = async () => {
  const orders = await OrderModel.findAll();

  return orders;
};

const findById = async (id: number) => {
  const orders = await OrderModel.findById(id);
  
  return orders;
};

export default {
  createOrder,
  findAll,
  findById,
};