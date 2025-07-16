import jwtToken from "../utils/jwtToken.js";
import {errorResponse} from "../utils/response.js"

export const authenticateToken = async function(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return errorResponse(res,'Authorization token missing or malformed',[],401);
    }

    const token = authHeader.split(" ")[1];

    try{
        const decode = await jwtToken.validateToken(token);
        console.log("decoded", decode);
        req.user = decode;
        next();
    }catch(error){
        if(error.name === "TokenExpiredError"){
            return errorResponse(res,'Token expired',[],401);
        } else if(error.name === "JsonWebTokenError"){
            return errorResponse(res,"Invalid token",[],401)
        }
        
        return errorResponse(res,"Token verification failed",[],500)
    }
}