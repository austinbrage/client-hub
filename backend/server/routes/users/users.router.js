import { Router } from "express";
import SanitizeGetRequests from './users.middlewares.js';
import UsersController from './users.controllers.js';

const createUsersRouter = ({ usersModel }) => {
   const usersRouter = Router();

   const sanitize = new SanitizeGetRequests();
   const usersController = new UsersController({ usersModel });

   usersRouter.get('/getByEmail', usersController.getByEmail);
   usersRouter.get('/getByExternalId', sanitize.getByExternalId, usersController.getByExternalId);
   usersRouter.get('/getAll', sanitize.getAll, usersController.getAll);
   usersRouter.get('/getIdPassword', usersController.getIdPassword);
   usersRouter.get('/getName', usersController.getName);
   usersRouter.get('/getEmail', usersController.getEmail);
   usersRouter.get('/getAuthor', usersController.getAuthor);
   usersRouter.post('/addNew', usersController.addNew);
   usersRouter.put('/changeExternalId', usersController.changeExternalId);
   usersRouter.put('/changeName', usersController.changeName);
   usersRouter.put('/changePassword', usersController.changePassword);
   usersRouter.put('/changeAuthor', usersController.changeAuthor);
   usersRouter.put('/changeEmail', usersController.changeEmail);
   usersRouter.delete('/remove', usersController.remove);

   return usersRouter;
}

export default createUsersRouter;