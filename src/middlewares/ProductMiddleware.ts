import { Request, Response, NextFunction } from 'express';
import errorMessages from './errorCodes';

const nameValidation = (req: Request, res: Response, next:NextFunction):any => {
  const { name } = req.body;

  if (!name) {
    const { code, error } = errorMessages.nameIsRequired;
    return res.status(code).json({ error });
  }

  if (typeof name !== 'string') {
    const { code, error } = errorMessages.nameString;
    return res.status(code).json({ error });
  }

  if (name.length < 3) {
    const { code, error } = errorMessages.nameLongerThan;
    return res.status(code).json({ error });
  }

  next();
};

const amountValidation = (req: Request, res: Response, next: NextFunction):any => {
  const { amount } = req.body;

  if (!amount) {
    const { code, error } = errorMessages.amountIsRequired;
    return res.status(code).json({ error });
  }

  if (typeof amount !== 'string') {
    const { code, error } = errorMessages.amountString;
    return res.status(code).json({ error });
  }

  if (amount.length < 3) {
    const { code, error } = errorMessages.amountLongerThan;
    return res.status(code).json({ error });
  }

  next();
};

export {
  nameValidation,
  amountValidation,
};