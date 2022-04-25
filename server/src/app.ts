import "dotenv/config";
import { Application, NextFunction, Request, Response } from "express";
import "./middleware/Passport";
import "./models/relation";
import { launchRoute } from "./routes/index.route";
import cookieSession = require("cookie-session");
import passport = require("passport");
import JSend from "./utils/JSend";
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const app: Application = express();

app.use(helmet());

app.use(
  cors({
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: "include",
  })
);
app.use(
  morgan("combined", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cookieSession({
    name: "ditme",
    secret: process.env.COOKIE_SECRET,
    maxAge: 24 * 60 * 60 * 1000,
    secure: true,
    path: "/",
  })
);
app.use(passport.initialize());
app.use(passport.session());

launchRoute(app);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err.status);
  const status = err.status || 500;
  res.status(status).json(JSend.error(err.message || "Internal Server Error"));
});
// Catch 404 and forward to error handler
app.use("/*", (req, res, next) => {
  res.status(404).json(JSend.error("Not Found"));
});

export default app;
