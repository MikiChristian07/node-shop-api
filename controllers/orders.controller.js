class Orders{
    async find (req, res){
        res.status(200).send({
            success: true,
            message: "A Get request on the Orders page"
        })
    }

    async create (req, res){
        res.status(200).send({
            success: true,
            message: "A Post request on the Orders page"
        })
    }

    // By param ID requests
    async findById (req, res){
        const orderId = req.params.orderId;
        res.status(200).send({
            success: true,
            message: `A Get by ID request on the Orders page with ID: ${orderId}`
        })
    }

    async deleteById (req, res){
        const orderId = req.params.orderId;
        res.status(200).send({
            success: true,
            message: `A Delete by ID request on the Orders page with ID: ${orderId}`
        })
    }
}

export default new Orders();