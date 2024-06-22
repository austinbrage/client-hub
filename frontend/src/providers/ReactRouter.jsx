import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/home/Home.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/> 
    }
]);

export function ReactRouterProvider() {
    return <RouterProvider router={router}/>
}