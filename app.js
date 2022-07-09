import 'express-async-errors';
import express from 'express';
import middleware from './middlewares/index.middleware.js';
import pino from 'pino';

export const logger = pino();
const app = express();
const PORT = process.env.PORT || 3000;

middleware(app);

app.listen(PORT, () => {
    logger.info(`App is running on port ${PORT}`);
})  