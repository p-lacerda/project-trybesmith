import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import ProductModel from './ProductModel';

const createOrder = async (products: any, id:any): Promise<any> => {
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