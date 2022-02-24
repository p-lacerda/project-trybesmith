import LoginModel from '../models/LoginModel';
import { Login, ILogin } from '../interfaces/Login';

const loginUser = async (user:Login) => {
  const users:ILogin[] | null = await LoginModel.findUser(user);

  return users;
};

export default {
  loginUser,
};