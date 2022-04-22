import express from "express";
import { userSchema } from "../../../models/user/user.model";
import userService from "../../../services/user/user.service";
import { validateBody } from "../../../utils/ValidateFunc";
import userController from "./user.controller";
const UserRouter = express.Router();

UserRouter.route("/register").post(
  validateBody(userSchema.userBodySchema),
  userController.register
);
UserRouter.route("/login").post(userController.login);
UserRouter.post("/check-username", userController.checkUsername);
UserRouter.post("/check-email", userController.checkEmail);
export default UserRouter;
