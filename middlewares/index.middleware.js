import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../routes/index.routes.js';
import dbConn from '../config/dbConfig.js';

const middleware = (app) => {
    dbConn()
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());

    app.use(router);
}

export default middleware;