import express from "express";
import passport from "passport";
import { userSchema } from "../../../models/user/user.model";
import userService from "../../../services/user/user.service";
import { validateBody } from "../../../utils/ValidateFunc";
import userController from "./user.controller";
const UserRouter = express.Router();

UserRouter.route("/register").post(
  validateBody(userSchema.userBodySchema),
  passport.authenticate("local-register", { session: true }),
  (req, res) => {
    res.json(req.user);
  }
);
UserRouter.route("/login").post(passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json(req.user);
});
UserRouter.post("/check-username", userController.checkUsername);
UserRouter.post("/check-email", userController.checkEmail);
export default UserRouter;
