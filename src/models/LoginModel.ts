import { Login, ILogin } from '../interfaces/Login';
import { IUser } from '../interfaces/User';
import connection from './connection';

// 
const findUser = async (user:Login):Promise<ILogin[] | null> => {
  const { username, password } = user;
  const [result] = await connection.query<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  if (result.length === 0) return null;

  console.log(result);
  return result;
};

const findUserByID = async (user:IUser):Promise<ILogin[] | null> => {
  const { username, id } = user;
  const [result] = await connection.query<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND id = ?',
    [username, id],
  );

  if (!result) return null;

  return result;
};

export default {
  findUser,
  findUserByID,
};