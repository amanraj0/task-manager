import { body, validationResult } from "express-validator";


export const allowedTaskFields = [
    'title',
    'description',
    'dueDate',
    'priority',
    'tags',
    'status',
];


const validateNewTaskReq = [
    body('title')
        .trim()
        .exists({ checkFalsy: true }).withMessage('Task Title is required'),

    body('description')
        .trim()
        .exists({ checkFalsy: true }).withMessage('Task Description is required'),

    body('priority')
        .trim()
        .optional()
        .isIn(['Low', 'Medium', 'High', 'Critical'])
        .withMessage('Priority must be one of Low, Medium, High, Critical'),

    body('status')
        .trim()
        .optional()
        .isIn(['Pending', 'In-Progress', 'Blocked', 'Completed'])
        .withMessage('Status must be one of Pending, In-Progress, Blocked, Completed'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = [];
            errors.errors.map(e => error.push(e.msg));
            return res.status(400).json({ errors: error });
        }

        next();
    }
];

export default validateNewTaskReq;