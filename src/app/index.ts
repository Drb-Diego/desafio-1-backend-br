import express from 'express';
import 'dotenv/config';
import errorMiddleware from '../middleware/errorMiddleware';

const app = express();

app.use(express.json());

app.use(errorMiddleware);

export default app;