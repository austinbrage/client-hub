import { Swagger } from '../pages/swagger/Swagger.jsx';
import { healthcareSubroutes } from './healthcare/healthcare.routes.jsx';
import { clientsSubroutes } from './clients/clients.routes.jsx';
import { jobsSubroutes } from './jobs/jobs.routes.jsx';
import { materialsSubroutes } from './materials/materials.routes.jsx';
import { meetingsSubroutes } from './meetings/meetings.routes.jsx';
import { processesSubroutes } from './processes/processes.routes.jsx';
import { usersSubroutes } from './users/users.routes.jsx';

const processApiRoutes = (routes) => {
    return routes.map(route => ({
        ...route,
        children: route.children.map(({ _name, ...rest }) => rest)
    }));
}

export const apiRoutes = [
    {
        path: 'ping',
        children: healthcareSubroutes
    },
    {
        path: 'clients',
        children: clientsSubroutes
    },
    {
        path: 'jobs',
        children: jobsSubroutes
    },
    {
        path: 'materials',
        children: materialsSubroutes
    },
    {
        path: 'meetings',
        children: meetingsSubroutes
    },
    {
        path: 'processes',
        children: processesSubroutes
    },
    {
        path: 'users',
        children: usersSubroutes
    },
];

export const swaggerRoutes = {
    path: '/swagger',
    element: <Swagger/>,
    children: processApiRoutes(apiRoutes)
};
