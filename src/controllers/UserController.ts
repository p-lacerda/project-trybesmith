import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { User } from '../interfaces/User';
import jwtValidations from '../middlewares/jwtValidations';

const createUser = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;

  // Send user body to services and receive a message and status code
  const users: User = await UserService.createUser(user);
  
  const token: string = jwtValidations.createToken(users);
  
  res.status(201).json({ token });
};

export default {
  createUser,
};