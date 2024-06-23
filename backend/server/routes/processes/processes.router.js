import { Router } from "express";
import SanitizeGetRequests from './processes.middlewares.js';
import ProcessesController from './processes.controllers.js';

const createProcessesRouter = ({ processesModel }) => {
   const processesRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const processesController = new ProcessesController({ processesModel });

   processesRouter.get('/getAll', processesController.getAll);
   processesRouter.get('/getAllByJob', sanitize.getAllByJob, processesController.getAllByJob);
   processesRouter.get('/getByTitle', processesController.getByTitle);
   processesRouter.get('/getId', sanitize.getId, processesController.getId);
   processesRouter.post('/addNew', processesController.addNew);
   processesRouter.put('/changeData', processesController.changeData);
   processesRouter.delete('/remove', processesController.remove);

   return processesRouter;
}

export default createProcessesRouter;