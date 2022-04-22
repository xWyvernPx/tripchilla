import { Application, NextFunction, Request, Response } from "express";
import titleRoute from "./user/title/title.route";
import app from "../app";
import AddressRoute from "./user/address/address.route";
import tourRouter from "./tour/tour/tour.route";
import UserRouter from "./user/user/user.route";
import ggAuthRouter from "./auth/googleAuth";
import Passport from "passport";
import axios from "axios";
export const launchRoute = (app: Application) => {
  app.get(
    "/",
    Passport.authenticate("jwt", { session: false }),
    (req: Request, res: Response) => {
      res.send("Demo");
    }
  );
  app.use("/api/user", UserRouter);

  app.use("/api/auth/google", ggAuthRouter);
  app.use("/api/title", titleRoute);
  app.use("/api/address", AddressRoute);
  app.use("/api/tour", tourRouter);
};
