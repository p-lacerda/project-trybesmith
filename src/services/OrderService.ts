import OrderModel from '../models/OrderModel';

const createOrder = async (products: any, id:number): Promise<any> => {
  const orders = await OrderModel.createOrder(products, id);

  return orders;
};

export default {
  createOrder,
};