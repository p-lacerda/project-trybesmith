import { Router } from 'express';
import {
  usernameValidation,
  passwordValidation,
} from '../middlewares/UserMiddleware';

import LoginController from '../controllers/LoginController';

const router = Router();

router.post('/login', [usernameValidation, passwordValidation, LoginController.loginUser]);

export default router;