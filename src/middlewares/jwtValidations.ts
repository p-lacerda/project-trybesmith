import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/Login';
import LoginModel from '../models/LoginModel';

const SECRET = 'mysecret';

const createToken = (users:object):string => {
  const token:string = jwt.sign({ data: users }, SECRET);

  return token;
};

const validateToken = async (req: any, res: any, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded:any = jwt.verify(token, SECRET);
    const user:any = { username: decoded.data.username, id: decoded.data.id };
    const users:ILogin[] | null = await LoginModel.findUserByID(user);

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