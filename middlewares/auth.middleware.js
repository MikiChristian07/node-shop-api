import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded =  jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch {
        return res.status(401).send({
            success: false,
            message: "Auth Failed"
        })
    }
}

export default checkAuth;