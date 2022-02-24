import { Login, ILogin } from '../interfaces/Login';
import connection from './connection';

// 
const findUser = async (user:Login):Promise<ILogin[] | null> => {
  const { username, password } = user;
  const [result] = await connection.query<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  if (result.length === 0) return null;

  return result;
};

const findUserByID = async (user:ILogin):Promise<ILogin[] | null> => {
  const { username, id } = user;
  const [result] = await connection.query<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND id = ?',
    [username, id],
  );

  if (result.length === 0) return null;

  return result;
};

export default {
  findUser,
  findUserByID,
};