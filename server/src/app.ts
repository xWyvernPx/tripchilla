import { Application, NextFunction, Request, Response } from "express";
import Province from "./models/location/province";
import { launchRoute } from "./routes/index.route";
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const morgan = require("morgan")
const app:Application= express();
app.use(helmet());
app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

launchRoute(app);

export default app;