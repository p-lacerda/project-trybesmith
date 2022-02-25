import express from 'express';
import UserRouter from './routes/UserRoutes';
import LoginRouter from './routes/LoginRoutes';
import ProductRouter from './routes/ProductRoutes';
import OrderRouter from './routes/OrderRoutes';

const app = express();

app.use(express.json());

app.use(UserRouter);
app.use(LoginRouter);
app.use(ProductRouter);
app.use(OrderRouter);

export default app;
