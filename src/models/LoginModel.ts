import { Login, ILogin } from '../interfaces/Login';
import connection from './connection';

// 
const findUser = async (user:Login):Promise<ILogin[] | null> => {
  const { username, password } = user;
  const [result] = await connection.query<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  console.log(!result, 'model');
  if (result.length === 0) return null;

  return result;
};

export default {
  findUser,
};