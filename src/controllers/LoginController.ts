import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import jwtValidations from '../middlewares/jwtValidations';

const loginUser = async (req: Request, res: Response):Promise<any> => {
  const user = req.body;

  const users = await LoginService.loginUser(user);

  if (users === null) return res.status(401).json({ error: 'Username or password invalid' });

  const token = jwtValidations.createToken(users);
  
  res.status(200).json({ token });
};

export default {
  loginUser,
};