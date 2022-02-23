// import connection from './connection';
import { User } from '../interfaces/User';

const createUser = async (user: User): Promise<void> => {
  // const { username, classe, level, password } = user;
  console.log(user);
};

export default {
  createUser,
};