import User from "../models/user.model.js";

class userService{
    async create(data){
        const postUser = await User.create(data);
        return postUser;
    }

    async findByEmail(email){
        const findEmail = await User.findOne({ email });
        return findEmail;
    }

    async delete(id){
        const deleteUser = await Product.findByIdAndDelete(id);
        return deleteUser;
    }

}

export default new userService();
