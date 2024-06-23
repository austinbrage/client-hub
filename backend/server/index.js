import createApp from "./routes/app.js";
import ClientsModel from "./routes/clients/clients.model.mysql.js";
import JobsModel from "./routes/jobs/jobs.model.mysql.js";
import MaterialsModel from "./routes/materials/materials.model.mysql.js";
import MeetingsModel from "./routes/meetings/meetings.model.mysql.js";
import ProcessesModel from "./routes/processes/processes.model.mysql.js";
import UsersModel from "./routes/users/users.model.mysql.js";
import { PORT, ENVIRONMENT } from "./global/utils/config.js";
import { createPoolConnection } from "./global/utils/database.js";
import { checkDatabaseConnection } from "./global/helpers/databaseCheck.js";

const pingPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });
const clientsPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });
const jobsPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });
const materialsPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });
const meetingsPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });
const processesPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });
const usersPool = createPoolConnection({ wait: true, cLimit: 1, qLimit: 0 });

const clientsModel = new ClientsModel({ clientsPool });
const jobsModel = new JobsModel({ jobsPool });
const materialsModel = new MaterialsModel({ materialsPool });
const meetingsModel = new MeetingsModel({ meetingsPool });
const processesModel = new ProcessesModel({ processesPool });
const usersModel = new UsersModel({ usersPool });

const app = createApp({
   pingPool,
   clientsModel,
   jobsModel,
   materialsModel,
   meetingsModel,
   processesModel,
   usersModel,
});

await checkDatabaseConnection({
   pool: pingPool,
   delay: 2000,
   devRetries: 1,
   prodRetries: 5
});

const server = app.listen(PORT[ENVIRONMENT], () => {
   console.log(`Server running on Port: ${PORT[ENVIRONMENT]}`);
});

export {
   app,
   server,
   clientsPool,
   jobsPool,
   materialsPool,
   meetingsPool,
   processesPool,
   usersPool,
};