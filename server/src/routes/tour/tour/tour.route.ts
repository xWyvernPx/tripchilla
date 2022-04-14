import express from 'express';
import tourController from './tour.controller';
const tourRouter = express.Router();
    tourRouter.route('/').post(tourController.createNewTour);
export default tourRouter;