const errorHandler = (error, req, res, next) => {
    return res.status(500).send({
        success: false,
        message: error
    })
}

export default errorHandler;