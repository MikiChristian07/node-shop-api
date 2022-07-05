class Products{
    async find (req, res){
        res.status(200).send({
            success: true,
            message: "A Get request on the products page"
        })
    }

    async create (req, res){
        res.status(200).send({
            success: true,
            message: "A Post request on the products page"
        })
    }

    //By ID params requests
    async findById (req, res){
        const productId = req.params.productId;
        res.status(200).send({
            success: true,
            message: `A Get by ID request on the products page with ID: ${productId}`
        })
    }

    async patchById (req, res){
        const productId = req.params.productId
        res.status(200).send({
            success: true,
            message: `A Patch by ID request on the products page with ID: ${productId}`
        })
    }

    async deleteById (req, res){
        const productId = req.params.productId
        res.status(200).send({
            success: true,
            message: `A Delete by ID request on the products page with ID: ${productId}`
        })
    }
}

export default new Products();