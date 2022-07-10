import bcrypt from 'bcrypt';
import _ from 'lodash';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import userService from "../services/user.service.js";

dotenv.config();
class userController{
    async createUser(req, res){

        //Check if the user alredy exists
        const userEmail = await userService.findByEmail(req.body.email);
        if(!_.isEmpty(userEmail)){
            return res.status(409).send({
                success: false,
                message: "This user already exists !"
            });
        }

        //Hash the password first before parsing to db
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            email: req.body.email,
            password: hashedPassword
        };


        const newUser = await userService.create(data);
        return res.status(201).send({
            message: 'User Created',
            body: newUser
        })
    }

    async loginUser(req, res){
        // Check if the user  exists

        const userEmail = await userService.findByEmail(req.body.email);
        if(_.isEmpty(userEmail)){
            return res.status(401).send({
                success: false,
                message: "Auth failed!"
            });
        }

        // Verify the password
        const verifiedPassword = await bcrypt.compare(req.body.password, userEmail.password);
        if (!verifiedPassword){
            return res.status(401).send({
                success: false,
                message: "Auth failed!"
            });
        }

        const token = jwt.sign({
            email: userEmail.email,
            userId: userEmail._id
            }, process.env.JWT_KEY, 
            {
                expiresIn: '1h'
        })

        return res.status(200).send({
            success: true,
            message: "Auth Successful",
            token
        })
    }

    async deleteUser(){
        const userId = req.params.userId;
        const erasedUser = await userService.delete(userId);

        res.status(200).send({
            success: true,
            message: "The document has been successfully removed from the collection",
            body: {
                email: erasedUser.email,
                _id: erasedUser._id,
                createdAt: erasedUser.createdAt,
                updatedAt: erasedUser.updatedAt,
            }
        });
    }
}

export default new userController();