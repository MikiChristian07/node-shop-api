import express from 'express';
import ordersRoute from './orders.route.js';
import productsRoute from './products.route.js';

const router = express.Router();

router.use('/products', productsRoute);
router.use('/orders', ordersRoute);

export default router;