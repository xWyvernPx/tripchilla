import express from "express";
import passport, { session } from "passport";
import { userSchema } from "../../../models/user/user.model";
import userService from "../../../services/user/user.service";
import { validateBody } from "../../../utils/ValidateFunc";
import userController from "./user.controller";
const UserRouter = express.Router();

UserRouter.route("/register").post(
  validateBody(userSchema.userBodySchema),
  passport.authenticate("local-register", { session: true }),
  (req, res) => {
    res.json({
      status: "success",
      message: "User registered successfully!",
    });
  }
);
UserRouter.route("/login").post(
  passport.authenticate("local", {
    session: true,
    successRedirect: "http://localhost:3000/",
  }),
  (req, res, next) => {
    const { passport } = req.session as any;
    console.log(passport, "test");
    res.json({
      status: "success",
      message: "You are successfully logged in!",
    });
  }
);
UserRouter.post("/check-username", userController.checkUsername);
UserRouter.post("/check-email", userController.checkEmail);
export default UserRouter;
