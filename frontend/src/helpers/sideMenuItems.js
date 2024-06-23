const getTypeFromPath = (path) => {
    if (path === 'api' || path === 'database') return 'GET';
    
    if (path.startsWith('get')) return 'GET';
    if (path.startsWith('change')) return 'PUT';
    if (path.startsWith('add')) return 'POST';
    if (path.startsWith('remove')) return 'DELETE';

    return 'UNKNOWN';
};

export const generateSideMenuItems = (routes) => {
    return routes.map(route => {
        
        const subRoutes = route.children ? route.children.map(subRoute => ({
            type: getTypeFromPath(subRoute.name),
            name: `/${subRoute.path}`
        })) : [];

        return {
            mainRoute: route.path.replace('/', ''),
            subRoutes: subRoutes
        };
    });
};
