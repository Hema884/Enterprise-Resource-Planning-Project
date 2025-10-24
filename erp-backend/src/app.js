import express from 'express';
import cors from 'cors';
import { startScheduler } from './scheduler/scheduler.js';
import { syncPunchData } from './services/syncService.js';
import logger from './logger/logger.js';
import employeeRoutes from '../routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5173;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Mount employee routes
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
    res.send('Punch Sync Service is running');
});

// Start the sync service once at boot
syncPunchData().catch((e) => logger.error(`Initial sync failed: ${e.message}`));

// Start the scheduler for periodic data fetching
startScheduler();

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});