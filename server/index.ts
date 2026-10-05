import 'dotenv/config';
import app from './app';
import { getDataSource } from './db/data-source';

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await getDataSource();
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to initialize database connection:', error);
    process.exit(1);
  }
}

startServer();
