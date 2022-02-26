import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import ProductModel from './ProductModel';
import { IProducts, AllOrders, Orders } from '../interfaces/Order';
import { AllProducts } from '../interfaces/Product';

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

const findAll = async ():Promise<AllOrders[]> => {
  const [orders] = await connection.execute<Orders[]>(
    'SELECT * FROM Trybesmith.Orders',
  );

  const result = orders.map(async (order: Orders) => {
    const [products] = await connection.execute<AllProducts[]>(
      'SELECT * FROM Trybesmith.Products WHERE id = ?',
      [order.id],
    );

    return {
      id: order.id,
      userId: order.userId,
      products: products.map((product: { id: number }) => product.id),
    };
  });

  return Promise.all(result);
};

const findById = async (id: number):Promise<AllOrders> => {
  const [order] = await connection.execute<Orders[]>(
    'SELECT * FROM Trybesmith.Orders WHERE id = ?',
    [id],
  );

  const [products] = await connection.execute<AllProducts[]>(
    'SELECT * FROM Trybesmith.Products WHERE id = ?',
    [order[0].id],
  );

  return {
    id: order[0].id,
    userId: order[0].userId,
    products: products.map((product: { id: number }) => product.id),
  };
};

export default {
  createOrder,
  findAll,
  findById,
};