import { Request, Response } from 'express';
import UserService from '../services/UserService';
// import { User } from '../interfaces/User';
import { Status } from '../interfaces/StatusCode';

class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    const { body: user } = req;
  
    // Send user body to services and receive a message and status code
    const userStatus: Status = await UserService.createUser(user);
  
    res.status(userStatus.code).json(userStatus.message);
  };
}

export = {
  UserController,
};