import User from "../models/user.js";
import matchEmailAndPassword from "./matchEmailAndPassword.js";
import jwtToken from "../utils/jwtToken.js";

const createUser = async (userInfo) => {
    const user = new User(userInfo);
    return await user.save();
}

const login = async (email, password) => {
    const user = await matchEmailAndPassword(email, password);
    if(user){
        return await jwtToken.createToken(user);
    }
}

export default {
    createUser,
    login,
}