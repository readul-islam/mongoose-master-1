import express from 'express';
import cors from 'cors';
import dbConnection from './config/db.config';
import appRouter from './routes';
const app = express();

// parser configuration
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

// routes configuration

app.use('/api/v1/', appRouter);

export default app;
