import { NextFunction, Request, Response } from "express";
import userService from "../../../services/user/user.service";
import JWT from "../../../utils/JWT";

class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const result = await userService.register(payload, next);
      if (result) {
        const token = await JWT.encode({ userid: result.userid });
        res.setHeader("access_token", token);
        res.status(201).json(result);
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
        const token = await JWT.encode({ userid: result.userid });
        res.setHeader("access_token", token);
        res.status(200).json(result);
      } else throw new Error("usernmae or password is incorrect!");
    } catch (err: any) {
      err.status = 400;
      next(err);
    }
  }
}
export default new UserController();
