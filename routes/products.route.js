import express from 'express';
import multer from 'multer';
import Products from "../controllers/products.controller.js";

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload/')
    },
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
});

const fileType = (req, file, callback) => {
    if(file.mimetype == 'image/jpeg' || file.mimetype === 'image/png'){
        callback(new Error(), true)
    } else {
        callback(null, false)
    }
    
}
const uploads = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileType
});
const productsRoute = express.Router();

productsRoute.get('/', Products.fetchAll);
productsRoute.get('/:productId', Products.findById);
productsRoute.post('/', uploads.single('productImage'), Products.create);
productsRoute.patch('/:productId', Products.patchById);
productsRoute.delete('/:productId', Products.deleteById);

export default productsRoute;