import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../routes/index.routes.js';
import dbConn from '../config/dbConfig.js';
import errorHandler from './error.middleware.js';

const middleware = (app) => {
    dbConn()
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
    app.use('/uploads',express.static('upload'))
    
    app.use(router);
    app.use(errorHandler);
}

export default middleware;