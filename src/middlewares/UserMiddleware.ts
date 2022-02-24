import { Request, Response, NextFunction } from 'express';
import errorMessages from './errorCodes';

const usernameValidation = (req: Request, res: Response, next:NextFunction) => {
  const { username } = req.body;

  if (!username) {
    const { code, error } = errorMessages.usernameIsRequired;
    return res.status(code).json({ error });
  }

  if (typeof username !== 'string') {
    const { code, error } = errorMessages.usernameString;
    return res.status(code).json({ error });
  }

  if (username.length < 3) {
    const { code, error } = errorMessages.usernameLongerThan;
    return res.status(code).json({ error });
  }

  next();
};

const classeValidation = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) {
    const { code, error } = errorMessages.classeIsRequired;
    return res.status(code).json({ error });
  }

  if (typeof classe !== 'string') {
    const { code, error } = errorMessages.classeString;
    return res.status(code).json({ error });
  }

  if (classe.length < 3) {
    const { code, error } = errorMessages.classeLongerThan;
    return res.status(code).json({ error });
  }

  next();
};

const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level === undefined) {
    const { code, error } = errorMessages.levelIsRequired;
    return res.status(code).json({ error });
  }

  if (typeof level !== 'number') {
    const { code, error } = errorMessages.levelString;
    return res.status(code).json({ error });
  }

  if (level <= 0) {
    const { code, error } = errorMessages.levelGreaterThan;
    return res.status(code).json({ error });
  }

  next();
};

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    const { code, error } = errorMessages.passwordIsRequired;
    return res.status(code).json({ error });
  }

  if (typeof password !== 'string') {
    const { code, error } = errorMessages.passwordString;
    return res.status(code).json({ error });
  }

  if (password.length < 8) {
    const { code, error } = errorMessages.passwordLongerThan;
    return res.status(code).json({ error });
  }

  next();
};

export {
  usernameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
};