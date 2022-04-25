import { NextFunction, Request, Response } from "express";
import tourService from "../../../services/tour/tour.service";
import JSend from "../../../utils/JSend";

class TourController {
  async createNewTour(req: Request, res: Response, next: NextFunction) {
    try {
      const tour = req.body;
      const newTour = await tourService.createNewTour(tour);
      if (newTour) return res.status(200).json(JSend.success(newTour));
      else res.status(400).json(JSend.fail("Create new tour failed"));
    } catch (e: any) {
      res.status(400).json(JSend.error(e.message));
    }
  }
  async getAllTours(req: Request, res: Response, next: NextFunction) {
    try {
      const pagination: any = req.query; // include PaginationQuery(page,limit,order) and Query Terms(q);
      const tours = await tourService.getAllTours(pagination);
      if (tours) return res.status(200).json(JSend.success(tours));
      else res.status(400).json(JSend.fail("Get all tours failed"));
    } catch (e: any) {
      res.status(400).json(JSend.error(e.message));
    }
  }
  async getTourById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.tourId;
      const tour = await tourService.getTourBytourid(id);
      if (tour) return res.status(200).json(JSend.success(tour));
      else res.status(400).json(JSend.fail("Tour not found", { tourId: id }));
    } catch (e: any) {
      res.status(400).json(JSend.error(e.message));
    }
  }
  async suggestTours(req: Request, res: Response, next: NextFunction) {
    try {
      const rs = await tourService.suggestTours();
      if (rs) return res.status(200).json(JSend.success(rs));
      else next(Error("Server error"));
    } catch (e: any) {
      next(e);
    }
  }
}
export default new TourController();
