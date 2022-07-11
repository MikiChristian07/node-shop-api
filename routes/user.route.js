import express from 'express';
import Users from "../controllers/user.controller.js";
import checkAuth from '../middlewares/auth.middleware.js';

const userRoute = express.Router();

userRoute.post('/signup', Users.createUser);
userRoute.delete('/:userId', checkAuth,Users.deleteUser);
userRoute.post('/signin', Users.loginUser);

export default userRoute;