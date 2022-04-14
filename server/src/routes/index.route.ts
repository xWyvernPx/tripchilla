import { Application, NextFunction, Request ,Response} from "express";
import titleRoute from "./user/title/title.route"
import app from "../app";
import AddressRoute from "./user/address/address.route";
import tourRouter from "./tour/tour/tour.route";

export const launchRoute = (app :Application) => {
    app.get("/", (req: Request, res: Response) => {
        res.send("Demo");
    })
    app.use("/api/title",titleRoute);
    app.use ("/api/address", AddressRoute);
    app.use("/api/tour",tourRouter);
}
