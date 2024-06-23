import { Router } from "express";
import SanitizeGetRequests from './jobs.middlewares.js';
import JobsController from './jobs.controllers.js';

const createJobsRouter = ({ jobsModel }) => {
   const jobsRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const jobsController = new JobsController({ jobsModel });

   jobsRouter.get('/getAll', jobsController.getAll);
   jobsRouter.get('/getAllByClient', sanitize.getAllByClient, jobsController.getAllByClient);
   jobsRouter.get('/getByTitle', jobsController.getByTitle);
   jobsRouter.get('/getId', sanitize.getId, jobsController.getId);
   jobsRouter.post('/addNew', jobsController.addNew);
   jobsRouter.put('/changeData', jobsController.changeData);
   jobsRouter.delete('/remove', jobsController.remove);

   return jobsRouter;
}

export default createJobsRouter;