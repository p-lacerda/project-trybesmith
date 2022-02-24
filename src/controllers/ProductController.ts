import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import { IProduct, Product } from '../interfaces/Product';
// import jwtValidations from '../middlewares/jwtValidations';

const createProduct = async (req: Request, res: Response):Promise<void> => {
  const product:Product = req.body;

  // Send user body to services and receive a message and status code
  const products:IProduct = await ProductService.createProduct(product);
    
  res.status(201).json(products);
};

export default {
  createProduct,
};