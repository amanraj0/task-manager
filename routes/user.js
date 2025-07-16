import { Router } from "express";
import validateNewRoleReq, { allowedAssignRoleFields } from "../middlewares/validateNewRoleReq.js";
import rejectUnknownFields from "../middlewares/rejectUnknownFields.js";
import { authenticateToken } from "../middlewares/authenticateRequest.js";
import userController from "../controllers/userController.js";
import { authorizeRole } from "../middlewares/authorizeRole.js";
import roles from "../config/roles.js";

const router = Router();


router.route("/:userId/role")
    .put(authenticateToken,
        authorizeRole(roles.ROLES.ADMIN,roles.ROLES.MANAGER),
        rejectUnknownFields(allowedAssignRoleFields),
        validateNewRoleReq,
        userController.assignNewRoleToUser);


export default router;