import express from 'express';
import { TourSchemas } from '../../../models/tour/tour.model';
import { validateBody, validatePagination, validateParams } from '../../../utils/ValidateFunc';
import tourController from './tour.controller';
const tourRouter = express.Router();
    tourRouter.route('/')
    .post(validateBody(TourSchemas.tourBodySchema),tourController.createNewTour)
    .get(validatePagination,tourController.getAllTours);
    tourRouter.route('/:tourId')
    .get(validateParams(TourSchemas.tourIdSchema,"tourId"),tourController.getTourById)
export default tourRouter;