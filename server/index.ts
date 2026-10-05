import 'dotenv/config';
import app from './app';
import { getDataSource } from './db/data-source';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    logger.info('Starting MyHost backend server...');
    await getDataSource();
    logger.info('Database initialized successfully.');

    app.listen(PORT, () => {
      logger.info(`Server is running and listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to initialize database connection during startup:', error);
    process.exit(1);
  }
}

startServer();
