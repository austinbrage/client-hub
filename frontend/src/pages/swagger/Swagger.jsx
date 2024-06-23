import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SideMenu } from '../../components/sideMenu/SideMenu.jsx';
import { API_URL } from '../../api/endpoints.js';
import { IoIosCopy } from "react-icons/io";
import { apiRoutes } from '../../api/routes.jsx';
import { ENVIRONMENT } from '../../utils/config.js';
import './prismjs.css';
import './swagger.css';

export function Swagger() {

    const { pathname } = useLocation();

    const [currentName, setCurrentName] = useState('');
    const [currentRoute, setCurrentRoute] = useState('');
    const [currentResource, setCurrentResource] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${API_URL}/${currentRoute}`);
        toast.success('URL copied to clipboard');
    }

    useEffect(() => {
        const [_ignore, mainRoute, ...subRoutes] = pathname.split('/');

        setCurrentRoute(`${mainRoute}/${subRoutes.join('/')}`);

        apiRoutes.map(route => {
            if(route.path !== `/${mainRoute}`) return;
            const resource = route.path.replace('/', '');
            setCurrentResource(resource.charAt(0).toUpperCase() + resource.slice(1));

            route.children.map(subroute => {
                if(subroute.path !== subRoutes.join('/')) return;
                setCurrentName(subroute.name);
            }) 
        })
    }, [pathname]);

    if (ENVIRONMENT === 'production') {
        return <div>404 Not Found</div>;
    }

    return (
        <>
            <SideMenu {...{apiRoutes}}/>

            <div className='swagger'>
                <h1 className='swagger-title'>
                    Api Explorer
                </h1>
                {pathname !== '/swagger' && (
                    <div>
                        <div className='swagger-route'>
                            <p>
                                {API_URL}/{currentRoute}
                            </p>
                            <span 
                                onClick={() => copyToClipboard()}
                                className='swagger-route-icon'
                            >
                                <IoIosCopy/>
                            </span>
                        </div>
                        <h2 className='swagger-subtitle'>
                            {currentResource}
                            <span>
                                {currentName}
                            </span>
                        </h2>
                        <Outlet/>
                    </div>
                )}
            </div>
        </>
    )
}