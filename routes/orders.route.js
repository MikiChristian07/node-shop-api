import express from 'express';
import Orders from "../controllers/orders.controller.js";

const ordersRoute = express.Router();

ordersRoute.get('/', Orders.find);
ordersRoute.get('/:orderId', Orders.findById);
ordersRoute.post('/', Orders.create);
ordersRoute.delete('/:orderId', Orders.deleteById);

export default ordersRoute;