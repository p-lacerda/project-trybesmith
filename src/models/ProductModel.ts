import { ResultSetHeader } from 'mysql2';
import { IProduct, Product } from '../interfaces/Product';
import connection from './connection';

const createProduct = async (product: Product): Promise<IProduct> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  const { insertId: id } = result;
  return {
    item: {
      id,
      name,
      amount,
    },
  };
};

export default {
  createProduct,
};