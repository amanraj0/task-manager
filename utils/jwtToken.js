import JWT from "jsonwebtoken";

const SECRET = process.env.JWT_TOKEN_SECRET;
const EXPIRES_IN = process.env.JWT_TOKEN_EXPIRY_IN_SEC;

const createToken = async function(user){
    const payload = {
        _id: user._id,
        email: user.email
    };

    

    const token = JWT.sign(payload,SECRET,{
        expiresIn: EXPIRES_IN,
    });

    return token;
}

const validateToken = async function(token){
    return JWT.verify(token,SECRET);
}

export default{
    createToken,
    validateToken,
} 