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
  nameIsRequired: {
    error: 'Name is required',
    code: 400,
  },
  nameString: {
    error: 'Name must be a string',
    code: 422,
  },
  nameLongerThan: {
    error: 'Name must be longer than 2 characters',
    code: 422,
  },
  amountIsRequired: {
    error: 'Amount is required',
    code: 400,
  },
  amountString: {
    error: 'Amount must be a string',
    code: 422,
  },
  amountLongerThan: {
    error: 'Amount must be longer than 2 characters',
    code: 422,
  },
  productsIsRequired: {
    error: 'Products is required',
    code: 400,
  },
  productsArray: {
    error: 'Products must be an array of numbers',
    code: 422,
  },
  productsNotEmpty: {
    error: 'Products can\'t be empty',
    code: 422,
  },
  ordersNotFound: {
    error: 'Order not found',
    code: 404,
  },
};

export default errorMessages;