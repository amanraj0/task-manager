import { body, validationResult} from "express-validator";
import {errorResponse} from "../utils/response.js";

export const allowedAssignRoleFields = ['role'];

const validateNewRoleReq = [
    body('role')
        .trim()
        .exists({ checkFalsy: true }).withMessage('Role is required'),

    (req,res,next) =>{
        const errors = validationResult(req.body);

        if(!errors.isEmpty()){
            const error = [];
            errors.errors.map(e => error.push(e));
            return errorResponse(res,error,[],400);

        }

        next();

    }
];

export default validateNewRoleReq;
