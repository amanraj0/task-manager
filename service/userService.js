import User from "../models/user.js";


const assignNewRoleToUser = async function(userId, role){
    const user = await User.findByIdAndUpdate(userId,{role},{new: true});
    if(!user){
        throw new Error('User not found');
    }
    return user;
    
}

export default {
    assignNewRoleToUser,
}