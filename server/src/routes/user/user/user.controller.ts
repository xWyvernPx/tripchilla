import { NextFunction, Request, Response } from "express";
import userService from "../../../services/user/user.service";
import JSend from "../../../utils/JSend";

class UserController {
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
      res.status(400).json(JSend.error(err.message));
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
      res.status(400).json(JSend.error(err.message));
    }
  }
}
export default new UserController();
