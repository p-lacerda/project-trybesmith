import { Router } from 'express';
import {
  usernameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
} from '../middlewares/UserMiddleware';

import UserController from '../controllers/UserController';

const router = Router();

router.post('/users', [usernameValidation,
  classeValidation, levelValidation, passwordValidation, UserController.createUser]);

export default router;