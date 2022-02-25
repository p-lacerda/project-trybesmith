import OrderModel from '../models/OrderModel';
import { IProducts } from '../interfaces/Order';

const createOrder = async (products: number[], id:number): Promise<IProducts> => {
  const orders = await OrderModel.createOrder(products, id);

  return orders;
};

export default {
  createOrder,
};