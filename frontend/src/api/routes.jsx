import { Swagger } from '../pages/swagger/Swagger.jsx';
import { healthcareSubroutes } from './healthcare/healthcare.routes.jsx';

export const apiRoutes = [
    {
        path: '/ping',
        element: <Swagger/>,
        children: healthcareSubroutes
    },
];
