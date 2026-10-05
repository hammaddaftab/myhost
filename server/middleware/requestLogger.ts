import { Request, Response, NextFunction } from 'express';
import crypto from 'node:crypto';
import { logger } from '../utils/logger';

declare global {
  namespace Express {
    interface Request {
      id?: string;
      startTime?: number;
    }
  }
}

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const requestId = (req.headers['x-request-id'] as string) || crypto.randomUUID();
  req.id = requestId;
  req.startTime = Date.now();

  res.setHeader('X-Request-Id', requestId);

  res.on('finish', () => {
    const duration = req.startTime ? Date.now() - req.startTime : 0;
    const statusCode = res.statusCode;
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '-';
    const logMessage = `${req.method} ${req.originalUrl || req.url} ${statusCode} - ${duration}ms (IP: ${clientIp}, ID: ${requestId})`;

    if (statusCode >= 500) {
      logger.error(logMessage);
    } else if (statusCode >= 400) {
      logger.warn(logMessage);
    } else {
      logger.http(logMessage);
    }
  });

  next();
}
