// import { ResultSetHeader } from 'mysql2';
import { Login, ILogin, LoginID } from '../interfaces/Login';
import { IUser } from '../interfaces/User';
import connection from './connection';

// 
const findUser = async (user:Login):Promise<ILogin[] | null> => {
  const { username, password } = user;
  const [result] = await connection.execute<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  if (result.length === 0) return null;

  return result;
};

const findUserByID = async (user:IUser):Promise<LoginID[]> => {
  const { username, id } = user;
  const [result] = await connection.execute<ILogin[]>(
    'SELECT username, id FROM Trybesmith.Users WHERE username = ? AND id = ?',
    [username, id],
  );

  return result;
};

export default {
  findUser,
  findUserByID,
};