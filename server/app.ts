import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { getDataSource } from './db/data-source';
import { bookingRouter } from './routes/booking.route';
import { healthRouter } from './routes/health.route';
import { requestLogger } from './middleware/requestLogger';
import { logger } from './utils/logger';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Health check routes (mounted before DB connection middleware to respond instantly)
app.use('/health', healthRouter);
app.use('/api/health', healthRouter);

// Ensure Database is initialized on every request (singleton / lazy connect)
app.use(async (_req, _res, next) => {
  try {
    await getDataSource();
    next();
  } catch (err) {
    logger.error('Failed to initialize database connection for request:', err);
    next(err);
  }
});

// Mount routes for both '/api' and root '/'
app.use('/api', bookingRouter);
app.use('/', bookingRouter);

// Centralized error handling middleware
app.use((err: unknown, req: Request, res: Response, _next: NextFunction): void => {
  logger.error(`Unhandled error on ${req.method} ${req.url}:`, err);
  if (!res.headersSent) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
