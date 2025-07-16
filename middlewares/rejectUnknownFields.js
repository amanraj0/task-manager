import {errorResponse} from "../utils/response.js";

const rejectUnknownFields = (allowedFields = []) => {
    return (req, res, next) => {
        const unknownFields = Object.keys(req.body).filter(
            key => !allowedFields.includes(key)
        );

        if (unknownFields.length > 0) {
            return errorResponse(res,`Unknown field(s): ${unknownFields.join(",")}`,[],400);
        }

        next();
    }
};


export default rejectUnknownFields;