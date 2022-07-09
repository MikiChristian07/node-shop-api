import Order from "../models/order.model.js";

class orderService{
    async create(data){
        const postOrder = await Order.create(data);
        return postOrder;
    }

    async fetchAll() {
        const allOrders = await Order.find().populate('product', ['name']);
        return allOrders;
    }

    async fetchById(id){
        const getOrder = await Order.findById(id);
        return getOrder;
    }

    async delete(id){
        const deleteOrder = await Order.findByIdAndDelete(id);
        return deleteOrder;
    }
}

export default new orderService();
