import { Router, Request, Response } from 'express';
import { AppDataSource } from '../db/data-source';
import { logger } from '../utils/logger';

export const healthRouter = Router();

healthRouter.get(['/', '/health'], async (req: Request, res: Response): Promise<void> => {
  logger.debug('Health check endpoint called');

  const checkDb = req.query.db === 'true';
  let dbStatus = AppDataSource.isInitialized ? 'connected' : 'disconnected';

  if (checkDb && !AppDataSource.isInitialized) {
    try {
      await AppDataSource.initialize();
      dbStatus = 'connected';
    } catch {
      dbStatus = 'unreachable';
    }
  }

  res.status(200).json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: dbStatus,
  });
});
