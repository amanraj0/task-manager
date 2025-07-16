import {Router} from "express";

import validateNewUserReq,{allowedUserFields} from "../middlewares/validateNewUserReq.js";
import rejectUnknownFields from "../middlewares/rejectUnknownFields.js";
import authController from "../controllers/authController.js";
import validateLoginReq,{allowedLoginFields} from "../middlewares/validateLoginReq.js";

const router = Router();

router
    .route("/register")
    .post(rejectUnknownFields(allowedUserFields),validateNewUserReq,authController.createUser);

router
    .route("/login")
    .post(rejectUnknownFields(allowedLoginFields),validateLoginReq,authController.login);

export default router;