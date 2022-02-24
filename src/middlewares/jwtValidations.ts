import jwt from 'jsonwebtoken';

const SECRET = 'mysecret';

const createToken = (users:object):string => {
  const token:string = jwt.sign({ data: users }, SECRET);

  return token;
};

export default {
  createToken,
};