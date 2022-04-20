import { NextFunction, Request, Response } from "express";
import tourService from "../../../services/tour/tour.service";

class TourController {
  async createNewTour(req: Request, res: Response, next: NextFunction) {
    const tour = req.body;
    const newTour = await tourService.createNewTour(tour);
    if (newTour) return res.status(200).json(newTour);
    else res.status(400).json({ message: "Cant not create new tour" });
  }
  async getAllTours(req: Request, res: Response, next: NextFunction) {
    const pagination: any = req.query; // include PaginationQuery(page,limit,order) and Query Terms(q);
    const tours = await tourService.getAllTours(pagination);
    if (tours) return res.status(200).json(tours);
    else res.status(400).json({ message: "Cant not get all tours" });
  }
  async getTourById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.tourId;
    const tour = await tourService.getTourBytourId(id);
    if (tour) return res.status(200).json(tour);
    else
      res.status(400).json({
        message: "Not found tour with id: " + id,
      });
  }
  async suggestTours(req: Request, res: Response, next: NextFunction) {
    const rs = await tourService.suggestTours();
    if (rs) return res.status(200).json(rs);
    else next(Error("Server error"));
  }
}
export default new TourController();
