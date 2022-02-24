import UserModel from '../models/UserModel';
import { User, IUser } from '../interfaces/User';

const createUser = async (user: User): Promise<IUser> => {
  const id = await UserModel.createUser(user);

  const { username } = user;
  const userWithID = { username, id };
  return userWithID;
};

export default {
  createUser,
};