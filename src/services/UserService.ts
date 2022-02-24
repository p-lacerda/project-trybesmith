import UserModel from '../models/UserModel';
import { User } from '../interfaces/User';

const createUser = async (user: User): Promise<User> => {
  const users = await UserModel.createUser(user);

  return users;
};

export default {
  createUser,
};