import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import express, { json, Router } from "express";
import { APP, RESOURCES } from "./endpoints.js";
import corsMiddleware from "../global/middlewares/cors.js";
import errorMiddleware from "../global/middlewares/error.js";
import createHealthcareRouter from "./healthcare/healthcare.router.js";
import createClientsRouter from "./clients/clients.router.js";
import createJobsRouter from "./jobs/jobs.router.js";
import createMaterialsRouter from "./materials/materials.router.js";
import createMeetingsRouter from "./meetings/meetings.router.js";
import createProcessesRouter from "./processes/processes.router.js";
import createUsersRouter from "./users/users.router.js";
import { notFoundHandler } from "../global/handlers/notFound.js";
import { Authorization } from "../global/auth/authorization.js";

const createApp = ({
   pingPool,
   clientsModel,
   jobsModel,
   materialsModel,
   meetingsModel,
   processesModel,
   usersModel,
}) => {
   const app = express();
   const mainRouter = Router();
   const protectedMain = Router();

   const authorizer = new Authorization();
   protectedMain.use(authorizer.authMiddleware);

   app.use(json());
   app.use(helmet());
   app.use(morgan('dev'));
   app.use(cookieParser());
   app.use(corsMiddleware());

   mainRouter.use(RESOURCES.PING, createHealthcareRouter({ pingPool }));
   mainRouter.use(RESOURCES.USERS, createUsersRouter({ usersModel }));
   protectedMain.use(RESOURCES.CLIENTS, createClientsRouter({ clientsModel }));
   protectedMain.use(RESOURCES.JOBS, createJobsRouter({ jobsModel }));
   protectedMain.use(RESOURCES.MATERIALS, createMaterialsRouter({ materialsModel }));
   protectedMain.use(RESOURCES.MEETINGS, createMeetingsRouter({ meetingsModel }));
   protectedMain.use(RESOURCES.PROCESSES, createProcessesRouter({ processesModel }));

   mainRouter.use(protectedMain);

   app.use(APP.VERSION_1, mainRouter);
   app.all('*', notFoundHandler);
   app.use(errorMiddleware);

   return app;
}

export default createApp;