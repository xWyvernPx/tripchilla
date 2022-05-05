import { Request, Response, NextFunction } from "express";
class ChargeController {
  async upsetCustomer(req: Request, res: Response) {
    const userid = req.user;
  }
}
export default new ChargeController();
