import express from 'express';
import ordersRoute from './orders.route.js';
import productsRoute from './products.route.js';
import userRoute from './user.route.js';

const router = express.Router();

router.use('/products', productsRoute);
router.use('/orders', ordersRoute);
router.use('/users', userRoute);

export default router;