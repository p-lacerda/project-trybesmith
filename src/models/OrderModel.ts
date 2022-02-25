import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import ProductModel from './ProductModel';
import { IProducts } from '../interfaces/Order';

const createOrder = async (products: number[], id:number): Promise<IProducts> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [id],
  );
  await ProductModel.updateProduct(products, id);
  return {
    order: {
      userId: insertId,
      products,
    },
  };
};

export default {
  createOrder,
};