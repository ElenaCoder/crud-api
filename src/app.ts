import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFoundHandler';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;