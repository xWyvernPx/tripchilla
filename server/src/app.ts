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

// Catch 404 and forward to error handler
app.use('/*',(req,res,next)=>{
    res.status(404).json({
        status:404,
        message:"Not Found"
    });
});

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    const status =  500;
    res.status(status).json({
        status,
        message:err.message || "Internal Server Error"
    });
})


export default app;