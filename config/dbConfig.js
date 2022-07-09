/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import { logger } from '../app.js';
import dotenv from 'dotenv';

dotenv.config();

const dbConn = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            logger.info('Connected to the database...');
        })
        .catch((error) => {
            logger.info('Error connecting to the database');
            logger.error(error);
        });
};

export default dbConn;
