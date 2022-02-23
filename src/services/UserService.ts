import UserModel from '../models/UserModel';
import { User } from '../interfaces/User';
import { Status } from '../interfaces/StatusCode';

const createUser = async (user: User): Promise<Status> => {
  await UserModel.createUser(user);

  return { message: 'Usuário criado com sucesso', code: 200 };
};

export default {
  createUser,
};