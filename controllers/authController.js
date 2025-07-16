import authService from "../service/authService.js";
import {successResponse, errorResponse} from "../utils/response.js";

const createUser = async (req, res) => {
    try {
        const userInfo = req.body;
        const user = await authService.createUser(userInfo);
        const newUser = {
            id: user._id,
            firstName: user.firstName,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };

        return successResponse(res,'User registered successfully',newUser,201);

    } catch (error) {
        
        if (error?.errorResponse?.code == 11000) {
            console.error('Duplicate Email', error);
            return errorResponse(res,'Email already registered',[],409);
        } else {
            console.error('Error creating user:', error);
            return errorResponse(res,'Internal Server Error',[],500);
        }

    }
}

const login = async (req,res) =>{
    const { email, password} = req.body;
    try{
        const token = await authService.login(email, password);
        const loggedInUser = {
            token,
        }
        return successResponse(res,"Login successful",loggedInUser,200);
    }catch(error){
        return errorResponse(res,error.message,[],401);
    }
    

    
}

export default {
    createUser,
    login,
}