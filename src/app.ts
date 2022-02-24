import express from 'express';
import UserRouter from './routes/UserRoutes';
import LoginRouter from './routes/LoginRoutes';

const app = express();

app.use(express.json());

app.use(UserRouter);
app.use(LoginRouter);

export default app;
