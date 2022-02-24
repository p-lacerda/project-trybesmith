const errorMessages = {
  usernameIsRequired: {
    error: 'Username is required',
    code: 400,
  },
  usernameString: {
    error: 'Username must be a string',
    code: 422,
  },
  usernameLongerThan: {
    error: 'Username must be longer than 2 characters',
    code: 422,
  },
  classeIsRequired: {
    error: 'Classe is required',
    code: 400,
  },
  classeString: {
    error: 'Classe must be a string',
    code: 422,
  },
  classeLongerThan: {
    error: 'Classe must be longer than 2 characters',
    code: 422,
  },
  levelIsRequired: {
    error: 'Level is required',
    code: 400,
  },
  levelString: {
    error: 'Level must be a number',
    code: 422,
  },
  levelGreaterThan: {
    error: 'Level must be greater than 0',
    code: 422,
  },
  passwordIsRequired: {
    error: 'Password is required',
    code: 400,
  },
  passwordString: {
    error: 'Password must be a string',
    code: 422,
  },
  passwordLongerThan: {
    error: 'Password must be longer than 7 characters',
    code: 422,
  },
};

export default errorMessages;