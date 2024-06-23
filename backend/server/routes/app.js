import morgan from "morgan";
import helmet from "helmet";
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

   app.use(json());
   app.use(helmet());
   app.use(morgan('dev'));
   app.use(corsMiddleware());

   mainRouter.use(RESOURCES.PING, createHealthcareRouter({ pingPool }));
   mainRouter.use(RESOURCES.CLIENTS, createClientsRouter({ clientsModel }));
   mainRouter.use(RESOURCES.JOBS, createJobsRouter({ jobsModel }));
   mainRouter.use(RESOURCES.MATERIALS, createMaterialsRouter({ materialsModel }));
   mainRouter.use(RESOURCES.MEETINGS, createMeetingsRouter({ meetingsModel }));
   mainRouter.use(RESOURCES.PROCESSES, createProcessesRouter({ processesModel }));
   mainRouter.use(RESOURCES.USERS, createUsersRouter({ usersModel }));

   app.use(APP.VERSION_1, mainRouter);
   app.all('*', notFoundHandler);
   app.use(errorMiddleware);

   return app;
}

export default createApp;