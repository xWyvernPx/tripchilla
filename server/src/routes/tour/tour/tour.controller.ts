import { NextFunction, Request, Response } from "express";
import tourService from "../../../services/tour/tour.service";

class TourController{
    async createNewTour(req :Request, res:Response, next:NextFunction){
        const tour = req.body
        const newTour = await  tourService.createNewTour(tour);
        if(newTour)
        return res.status(200).json(newTour);
       else res.status(400).json({message:"Cant not create new tour"});
    }
}
export default new TourController();