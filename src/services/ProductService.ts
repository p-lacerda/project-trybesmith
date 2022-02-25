import ProductModel from '../models/ProductModel';
import { IProduct, Product } from '../interfaces/Product';

const createProduct = async (user:Product) => {
  const users: IProduct = await ProductModel.createProduct(user);

  return users;
};

const findAll = async () => ProductModel.findAll();

export default {
  createProduct,
  findAll,
};