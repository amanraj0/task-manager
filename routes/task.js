import {Router} from "express";

import validateNewTaskReq, {allowedTaskFields} from "../middlewares/validateNewTaskReq.js";
import rejectUnknownFields from "../middlewares/rejectUnknownFields.js";
import taskController from "../controllers/taskController.js";
import {authenticateToken} from "../middlewares/authenticateRequest.js";
import roles from "../config/roles.js";
import { authorizeRole } from "../middlewares/authorizeRole.js";


const router = Router();

router
    .route("/")
    .post(authenticateToken,rejectUnknownFields(allowedTaskFields),validateNewTaskReq,taskController.createTask)
    .get(authenticateToken,taskController.getAllTask);
    

router
    .route("/:taskId")
    .get(authenticateToken,taskController.getTaskById)
    .delete(authenticateToken,authorizeRole(roles.ROLES.ADMIN,roles.ROLES.MANAGER),taskController.deleteTaskById);


export default router;