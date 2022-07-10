import express from 'express';
import Users from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post('/signup', Users.createUser);
userRoute.delete('/:userId', Users.deleteUser);
userRoute.post('/signin', Users.loginUser);

export default userRoute;