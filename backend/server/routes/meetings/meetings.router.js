import { Router } from "express";
import SanitizeGetRequests from './meetings.middlewares.js';
import MeetingsController from './meetings.controllers.js';

const createMeetingsRouter = ({ meetingsModel }) => {
   const meetingsRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const meetingsController = new MeetingsController({ meetingsModel });

   meetingsRouter.get('/getAll', meetingsController.getAll);
   meetingsRouter.get('/getAllByClient', sanitize.getAllByClient, meetingsController.getAllByClient);
   meetingsRouter.get('/getByTitle', meetingsController.getByTitle);
   meetingsRouter.get('/getId', sanitize.getId, meetingsController.getId);
   meetingsRouter.post('/addNew', meetingsController.addNew);
   meetingsRouter.put('/changeData', meetingsController.changeData);
   meetingsRouter.delete('/remove', meetingsController.remove);

   return meetingsRouter;
}

export default createMeetingsRouter;