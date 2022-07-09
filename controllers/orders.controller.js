import _ from 'lodash';
import orderService from '../services/order.service.js';

class orderController{
    //Fix populpate query issue
    async fetchAll (req, res){
        const allOrders = await orderService.fetchAll();
        console.log(allOrders);
        res.status(200).send({
            success: true,
            message: "Successfull Get Request on orders",
            orders: allOrders.map(order => {
                return{
                    _id: order._id,
                    quantity: order.quantity,
                    productId: order.product,
                    createdAt: order.createdAt,
                    updatedAt: order.updatedAt,
                    request: {
                        type: 'GET',
                        url: 'localhost:3000/orders/:id'
                    }
                }
            })
        })
    }

    async create (req, res){
        const data = {
            quantity: req.body.quantity,
            product: req.body.productId
        };
        const newOrder = await orderService.create(data);
        res.status(200).send({
            success: true,
            message: "Successful Post request on orders",
            order: {
                _id: newOrder._id,
                quantity: newOrder.quantity,
                productId: newOrder.product,
                createdAt: newOrder.createdAt,
                updatedAt: newOrder.updatedAt,
                request: {
                    type: 'GET',
                    url: 'localhost:3000/orders/:id'
                }
            }
        })
    }

    // By param ID requests
    async findById (req, res){
        const orderId = req.params.orderId;
        const currOrder = await orderService.fetchById(orderId);

        if(_.isEmpty(currOrder)){
            return res.status(500).send({
                success: false,
                message: "Oops, could not find the requested product"
            })
        }

        return res.status(200).send({
            success: true,
            message: `Sucessfully found a matching ID`,
            order: {
                _id: currOrder._id,
                quantity: currOrder.quantity,
                productId: currOrder.product,
                createdAt: currOrder.createdAt,
                updatedAt: currOrder.updatedAt,
                request: {
                    type: "GET", 
                    url: `localhost:3000/orders/`
                }
            }
        })
    }

    async deleteById (req, res){
        const orderId = req.params.orderId;
        const erasedOrder = await orderService.delete(orderId);

        if(_.isEmpty(erasedOrder)){
            res.status(500).send({
                success: false,
                message: 'ID does not exist'
            })
        }
        res.status(200).send({
            success: true,
            message: "The document has been successfully removed from the collection",
            body: {
                _id: erasedOrder._id,
                quantity: erasedOrder.quantity,
                productId: erasedOrder.product,
                createdAt: erasedOrder.createdAt,
                updatedAt: erasedOrder.updatedAt,
                request: {
                    type: "POST", 
                    url: `localhost:3000/products/`,
                    body: {
                        name: "String",
                        price: "Number"
                    }
                }
            }
        });
    }
}

export default new orderController();