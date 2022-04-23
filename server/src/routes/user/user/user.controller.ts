import { NextFunction, Request, Response } from "express";
import userService from "../../../services/user/user.service";
import JWT from "../../../utils/JWT";

class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const result = await userService.register(payload, next);
      if (result) {
        req.body = { username: result.username, password: result.password };
        res.json({
          message: "Register success",
          data: result,
        });
      } else throw new Error("User not created!");
    } catch (error: any) {
      error.status = 400;
      next(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const result = await userService.login(payload);
      if (result) {
        res.status(200).json({
          status: "Success",
          message: "Log in succesfully",
          user: result,
        });
      } else throw new Error("usernmae or password is incorrect!");
    } catch (err: any) {
      err.status = 400;
      next(err);
    }
  }

  async checkUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const { payload } = req.body;
      const result = await userService.isDuplicate("username", payload);
      if (result) {
        res.status(200).json({
          available: false,
        });
      } else
        res.status(200).json({
          available: true,
        });
    } catch (err: any) {
      err.status = 400;
      next(err);
    }
  }

  async checkEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { payload } = req.body;
      const result = await userService.isDuplicate("email", payload);

      if (result) {
        res.status(200).json({
          available: false,
        });
      } else
        res.status(200).json({
          available: true,
        });
    } catch (err: any) {
      err.status = 400;
      next(err);
    }
  }
}
export default new UserController();
