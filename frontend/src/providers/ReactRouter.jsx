import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { swaggerRoutes } from '../api/routes.jsx';
import { Home } from '../pages/home/Home.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    swaggerRoutes
]);

export function ReactRouterProvider() {
    return <RouterProvider router={router}/>
}