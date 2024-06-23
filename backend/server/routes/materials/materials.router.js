import { Router } from "express";
import SanitizeGetRequests from './materials.middlewares.js';
import MaterialsController from './materials.controllers.js';

const createMaterialsRouter = ({ materialsModel }) => {
   const materialsRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const materialsController = new MaterialsController({ materialsModel });

   materialsRouter.get('/getAll', materialsController.getAll);
   materialsRouter.get('/getAllByJob', sanitize.getAllByJob, materialsController.getAllByJob);
   materialsRouter.get('/getAllByProcess', sanitize.getAllByProcess, materialsController.getAllByProcess);
   materialsRouter.get('/getByTitle', materialsController.getByTitle);
   materialsRouter.get('/getIdByJob', sanitize.getIdByJob, materialsController.getIdByJob);
   materialsRouter.get('/getIdByProcess', sanitize.getIdByProcess, materialsController.getIdByProcess);
   materialsRouter.post('/addNew', materialsController.addNew);
   materialsRouter.put('/changeData', materialsController.changeData);
   materialsRouter.delete('/remove', materialsController.remove);

   return materialsRouter;
}

export default createMaterialsRouter;