import { Router } from "express";
import { Authorization } from "../../global/auth/authorization.js";
import SanitizeGetRequests from './users.middlewares.js';
import UsersController from './users.controllers.js';

const createUsersRouter = ({ usersModel }) => {
   const usersRouter = Router();
   const protectedUsers = Router();

   const sanitize = new SanitizeGetRequests();
   const usersController = new UsersController({ usersModel });
   
   const authorizer = new Authorization();
   protectedUsers.use(authorizer.authMiddleware);

   usersRouter.get('/getIdPassword', usersController.getIdPassword);
   usersRouter.post('/openAuth', usersController.openAuth);
   usersRouter.post('/addNew', usersController.addNew);

   protectedUsers.get('/getByEmail', usersController.getByEmail);
   protectedUsers.get('/getByExternalId', sanitize.getByExternalId, usersController.getByExternalId);
   protectedUsers.get('/getAll', sanitize.getAll, usersController.getAll);
   protectedUsers.get('/getName', usersController.getName);
   protectedUsers.get('/getEmail', usersController.getEmail);
   protectedUsers.get('/getAuthor', usersController.getAuthor);
   protectedUsers.put('/changeExternalId', usersController.changeExternalId);
   protectedUsers.put('/changeName', usersController.changeName);
   protectedUsers.put('/changePassword', usersController.changePassword);
   protectedUsers.put('/changeAuthor', usersController.changeAuthor);
   protectedUsers.put('/changeEmail', usersController.changeEmail);
   protectedUsers.delete('/remove', usersController.remove);

   usersRouter.use(protectedUsers);

   return usersRouter;
}

export default createUsersRouter;