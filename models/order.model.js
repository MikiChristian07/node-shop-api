import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    quantity: {
        type: Number,
        default: 1
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }

}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)
export default Order;