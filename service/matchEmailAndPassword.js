import User from "../models/user.js";
import {createHash} from "../utils/helper.js";

async function matchEmailAndPassword(email,password){
    const user = await User.findOne({email});

    if(!user){
        throw new Error('User not found');
    }

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHash(password,salt);
    
    if(hashedPassword !== userProvidedHash){
        throw new Error('Incorrect Password');
    }                            

    return user;
}

export default matchEmailAndPassword;