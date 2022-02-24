import express from 'express';
import UserRouter from './routes/UserRoutes';
import LoginRouter from './routes/LoginRoutes';
import ProductRouter from './routes/ProductRoutes';

const app = express();

app.use(express.json());

app.use(UserRouter);
app.use(LoginRouter);
app.use(ProductRouter);

export default app;
