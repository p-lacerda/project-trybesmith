import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';
import LoginModel from '../models/LoginModel';

const SECRET = 'mysecret';

const createToken = (users:object):string => {
  const token: string = jwt.sign({ data: users }, SECRET);

  return token;
};

const validateToken = async (req: any, res: any, next: NextFunction) => {
  const token: string = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded: IUser = jwt.verify(token, SECRET) as IUser;
    const user:IUser = { username: decoded.username, id: decoded.id };
    const users:IUser[] | null = await LoginModel.findUserByID(user);

    req.user = users;
    next();
  } catch (err:unknown) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default {
  createToken,
  validateToken,
};