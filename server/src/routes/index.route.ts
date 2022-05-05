import { Application, NextFunction, Request, Response } from "express";
import titleRoute from "./user/title/title.route";
import app from "../app";
import AddressRoute from "./user/address/address.route";
import tourRouter from "./tour/tour/tour.route";
import UserRouter from "./user/user/user.route";
import ggAuthRouter from "./auth/googleAuth";
import Passport from "passport";
import axios from "axios";
import isAuthorized from "../middleware/isAuthorized";
import passport from "passport";
import chargeRouter from "./tour/charge/charge.route";
export const launchRoute = (app: Application) => {
  app.get(
    "/api/",
    // passport.authenticate("local"),
    isAuthorized,
    (req: Request, res: Response) => {
      res.json("Demo");
    }
  );
  app.use("/api/user", UserRouter);
  app.use("/api/auth/google", ggAuthRouter);
  app.use("/api/tour", tourRouter);
  app.use("/api/title", titleRoute);
  app.use("/api/address", AddressRoute);
  app.use("/api/charge", chargeRouter);
};
