import { Router } from "express";
import SanitizeGetRequests from './clients.middlewares.js';
import ClientsController from './clients.controllers.js';

const createClientsRouter = ({ clientsModel }) => {
   const clientsRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const clientsController = new ClientsController({ clientsModel });

   clientsRouter.get('/getAll', clientsController.getAll);
   clientsRouter.get('/getAllByUser', sanitize.getAllByUser, clientsController.getAllByUser);
   clientsRouter.get('/getByName', clientsController.getByName);
   clientsRouter.get('/getId', sanitize.getId, clientsController.getId);
   clientsRouter.post('/addNew', clientsController.addNew);
   clientsRouter.put('/changeData', clientsController.changeData);
   clientsRouter.delete('/remove', clientsController.remove);

   return clientsRouter;
}

export default createClientsRouter;