import {errorResponse} from "../utils/response.js"

export const authorizeRole = (...allowedRoles)=>{
    

    return (req,res,next)=>{
        
        if(!req.user.role || !allowedRoles.includes(req.user.role)){
            return errorResponse(res,"Access denied: Insufficient permissions",[],403);
        }

        next();
    }
}