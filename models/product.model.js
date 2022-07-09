import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productid:{
        type: mongoose.Schema.Types.ObjectId
    },

    name: {
        type: String,
        minlength: 2,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    productImage:{
        type: String
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

export default Product;
