import express from 'express';
import Orders from "../controllers/orders.controller.js";
import checkAuth from '../middlewares/auth.middleware.js';

const ordersRoute = express.Router();

ordersRoute.get('/', checkAuth, Orders.fetchAll);
ordersRoute.get('/:orderId', checkAuth, Orders.findById);
ordersRoute.post('/', checkAuth, Orders.create);
ordersRoute.delete('/:orderId', checkAuth, Orders.deleteById);

export default ordersRoute;