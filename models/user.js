import {Schema, model} from "mongoose";
import {createHash, generateRandomBytes} from "../utils/helper.js";

const userSchema = Schema({
    firstName:{
        type: String,
        required: true,
    },
    middleName:{
        type: String,
        required: false,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    salt:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: false,
        default: "user",
    }
},{timestamps: true});

userSchema.pre("save", function(next){
    const user = this;

    if(!user.isModified("password")) return next();

    const salt = generateRandomBytes(16);
    
    const hashedPassword = createHash(user.password, salt);
    
    this.salt = salt;
    this.password = hashedPassword;

    next();

});

const user = model('users',userSchema);

export default user;