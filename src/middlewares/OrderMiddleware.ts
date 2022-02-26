/* eslint-disable max-lines-per-function */
import { Request, Response, NextFunction } from 'express';
import OrderModel from '../models/OrderModel';
import errorMessages from './errorCodes';

const productsValidation = (req: Request, res: Response, next:NextFunction) => {
  const { products } = req.body;

  if (!products) {
    const { code, error } = errorMessages.productsIsRequired;
    return res.status(code).json({ error });
  }

  if (!Array.isArray(products)) {
    const { code, error } = errorMessages.productsArray;
    return res.status(code).json({ error });
  }

  if (products === [] || products.length === 0) {
    const { code, error } = errorMessages.productsNotEmpty;
    return res.status(code).json({ error });
  }

  next();
};

const verifyIfOrderExists = async (id: number) => {
  const isOrderValid: boolean[] = [];
  const orders = await OrderModel.findAll();

  orders.map(async (order) => {
    if (order.id === Number(id)) {
      isOrderValid.push(true);
    } else {
      isOrderValid.push(false);
    }
  });

  return isOrderValid;
};

const ordersValidation = async (req: Request, res: Response, next:NextFunction) => {
  const { id } = req.params;

  if (!id) {
    const { code, error } = errorMessages.ordersNotFound;
    return res.status(code).json({ error });
  }

  const isOrderValid = await verifyIfOrderExists(Number(id));

  if (isOrderValid.every((items) => items === false)) {
    const { code, error } = errorMessages.ordersNotFound;
    return res.status(code).json({ error });
  }

  next();
};

export default {
  productsValidation,
  ordersValidation,
};