import express from 'express';
import Products from "../controllers/products.controller.js";

const productsRoute = express.Router();

productsRoute.get('/', Products.find);
productsRoute.get('/:productId', Products.findById);
productsRoute.post('/', Products.create);
productsRoute.patch('/:productId', Products.patchById);
productsRoute.delete('/:productId', Products.deleteById);

export default productsRoute;