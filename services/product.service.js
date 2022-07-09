import Product from "../models/product.model.js";

class productService{
    async create(data){
        const newProduct = await Product.create(data);
        return newProduct;
    }

    async fetchAll(){
        const allProducts = await Product.find();
        return allProducts;
    }

    async fetchById(id){
        const product = await Product.findById(id);
        return product;
    }

    async update(id, data) {
        const product = await Product.findByIdAndUpdate(id, data, { new: true });
        return product;
    }     
    
    async delete(id){
        const product = await Product.findByIdAndDelete(id);
        return product;
    }

}

export default new productService();