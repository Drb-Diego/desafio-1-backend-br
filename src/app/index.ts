import express from 'express';
import 'dotenv/config';
import errorMiddleware from '../middleware/errorMiddleware';
import routes from '../routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

export default app;