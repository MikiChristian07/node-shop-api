import productService from '../services/product.service.js'

class Products{
    async fetchAll (req, res){
        const allProducts = await productService.fetchAll();
        res.status(200).send({
            success: true,
            message: "Fetch request on all products successful",
            productCount: allProducts.length,
            products: allProducts.map(product => {
                return{
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    productImage: product.productImage,
                    createdAt: product.createdAt,
                    updatedAt: product.updatedAt,
                    request: {
                        type: "GET", 
                        url: `localhost:3000/products/${product._id}`
                    }
                }
            }),
        })
    }

    async create (req, res){
        console.log(req.file);
        const reqData = {
            name: req.body.name,
            price: req.body.price,
            productImage: req.file.path
        };

        const newProduct = await productService.create(reqData);
        res.status(201)
            .send({
                success: true,
                message: "Successfully created a new Product",
                products: {
                    name: newProduct.name,
                    price: newProduct.price,
                    _id: newProduct._id,
                    productImage: newProduct.productImage,
                    createdAt: newProduct.createdAt,
                    updatedAt: newProduct.updatedAt,
                    request: {
                        type: "POST", 
                        url: `localhost:3000/products/${newProduct._id}`
                    }}
            });
        
    }

    //By ID params requests
    async findById (req, res){
        const productId = req.params.productId;
        const currProduct = await productService.fetchById(productId);

        if(!currProduct){
            return res.status(500).send({
                success: false,
                message: "Oops, could not find the requested product"
            })
        }

        return res.status(200).send({
            success: true,
            message: `Sucessfully found a matching ID`,
            body: {
                name: currProduct.name,
                price: currProduct.price,
                _id: currProduct._id,
                productImage: currProduct.productImage,
                createdAt: currProduct.createdAt,
                updatedAt: currProduct.updatedAt,
                request: {
                    type: "GET", 
                    url: `localhost:3000/products/`
                }
            }
        })
    }

    async patchById (req, res){
        const data = {id: req.params.productId, newData: req.body}
        const updatedProduct = await productService.update(data.id, data.newData);
        return res.status(200).send({
            status: true,
            message: "Successfully updated the selected collection", 
            body: {
                name: updatedProduct.name,
                price: updatedProduct.price,
                _id: updatedProduct._id,
                createdAt: updatedProduct.createdAt,
                updatedAt: updatedProduct.updatedAt,
                request: {
                    type: "GET", 
                    url: `localhost:3000/products/${updatedProduct._id}`
                }
            }
        });
    }

    async deleteById (req, res){
        const productId = req.params.productId;
        const erasedProduct = await productService.delete(productId);

        res.status(200).send({
            success: true,
            message: "The document has been successfully removed from the collection",
            body: {
                name: erasedProduct.name,
                price: erasedProduct.price,
                _id: erasedProduct._id,
                createdAt: erasedProduct.createdAt,
                updatedAt: erasedProduct.updatedAt,
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

export default new Products();