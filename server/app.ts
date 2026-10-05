import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { getDataSource } from './db/data-source';
import { bookingRouter } from './routes/booking.route';

export const app = express();

app.use(cors());
app.use(express.json());

// Ensure Database is initialized on every request (singleton / lazy connect)
app.use(async (_req, _res, next) => {
  try {
    await getDataSource();
    next();
  } catch (err) {
    console.error('Failed to initialize database connection for request:', err);
    next(err);
  }
});

// Mount routes for both '/api' and root '/'
app.use('/api', bookingRouter);
app.use('/', bookingRouter);

export default app;
