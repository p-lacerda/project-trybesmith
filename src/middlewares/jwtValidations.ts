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
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded:any = jwt.verify(token, SECRET);
    const user = { username: decoded.data.username, password: decoded.data.password };
    const users:ILogin[] | null = await LoginModel.findUser(user);

    req.user = users;
    next();
  } catch (err:any) {
    console.log(err);
  }
};

export default {
  createToken,
  validateToken,
};