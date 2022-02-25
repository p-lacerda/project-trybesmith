import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';
import LoginModel from '../models/LoginModel';

const SECRET = 'mysecret';

const createToken = (users:object):string => {
  const token: string = jwt.sign(users, SECRET);

  return token;
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded: IUser = jwt.verify(token, SECRET) as IUser;
    const { username, id } = decoded;
    const user:IUser = { username, id };
    const users = await LoginModel.findUserByID(user);

    res.locals = users;
    next();
  } catch (err:unknown) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default {
  createToken,
  validateToken,
};