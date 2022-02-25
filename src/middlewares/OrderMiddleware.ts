import { Request, Response, NextFunction } from 'express';
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

export default {
  productsValidation,
};