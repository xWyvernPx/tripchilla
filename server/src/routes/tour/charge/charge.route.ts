import { Express, Router } from "express";
import checkAuth from "../../../middleware/isAuthorized";
import chargeController from "./charge.controller";
const chargeRouter = Router();

// GET OR CREATE a new customer in stripe and return the customer id
chargeRouter.get("/customerid", checkAuth, chargeController.upsetCustomer);

export default chargeRouter;
