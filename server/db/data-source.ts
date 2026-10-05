import { DataSource } from 'typeorm';
import { Booking } from './entities/Booking.entity';
import { logger } from '../utils/logger';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('sslmode=require')
    ? { rejectUnauthorized: false }
    : false,
  synchronize: true,
  logging: process.env.DB_LOGGING === 'true',
  entities: [Booking]
});

let initPromise: Promise<DataSource> | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (AppDataSource.isInitialized) {
    return AppDataSource;
  }
  if (!initPromise) {
    logger.info('Connecting to PostgreSQL database...');
    initPromise = AppDataSource.initialize()
      .then((ds) => {
        logger.info('Database connection established successfully.');
        return ds;
      })
      .catch((err) => {
        logger.error('Database connection failed:', err);
        initPromise = null;
        throw err;
      });
  }
  return initPromise;
}
