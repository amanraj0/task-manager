import { body, validationResult } from "express-validator";
import { errorResponse } from "../utils/response.js";


export const allowedLoginFields = [
    "email",
    "password"
];

const validateLoginReq = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address')
        .normalizeEmail({
            gmail_remove_dots: false
        }),

    body("password")
        .trim()
        .isLength({ min: 9 })
        .withMessage('Password must be more than 8 characters long')
        .isAlphanumeric()
        .withMessage('Password must be alphanumeric (only letters and numbers)')
        .exists({ checkFalsy: true }).withMessage('Password is required'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = [];
            errors.errors.map(e => error.push(e.msg));
            return errorResponse(res, error, [], 400);
        }

        next();
    }
];

export default validateLoginReq;