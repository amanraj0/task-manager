import roles from "../config/roles.js";
import {successResponse,errorResponse} from "../utils/response.js";
import {userResponseTransformer} from "../utils/userResponseTransformer.js";
import userService from "../service/userService.js";


const assignNewRoleToUser = async function(req,res){
    const userId = req.params.userId;
    const {role} = req.body;
    const userRole = role.toLowerCase();
    if(!roles.ALLOWED_ROLES.includes(userRole)){
        return errorResponse(res,`Role could be one of ${ALLOWED_ROLES.join(", ")}`,[], 409);
    }else{
        try{
            const user = await userService.assignNewRoleToUser(userId,userRole);
            const formattedUser = userResponseTransformer(user);
            return successResponse(res,"User role updated successfully.",formattedUser,200);
        }catch(error){
            console.log(error);
            return errorResponse(res,`${error.message}`,[], 409);
        }
        

    }

}

export default {
    assignNewRoleToUser,
}