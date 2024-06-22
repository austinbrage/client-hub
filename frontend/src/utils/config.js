const allowedEnvironments = ['development', 'production', 'test'];

if (!allowedEnvironments.includes(import.meta.env.VITE_NODE_ENV)) {
    throw new Error(`
        The environment '${import.meta.env.VITE_NODE_ENV}' is not valid. 
        It must be one of: ${allowedEnvironments.join(', ')}
    `);
}

export const ENVIRONMENT = import.meta.env.VITE_NODE_ENV ?? 'production';

export const API = {
    development: import.meta.env.VITE_DEV_API_URL ?? 'http://localhost:3000/app',
    production: import.meta.env.VITE_PROD_API_URL ?? 'http://localhost:3001/app',
    test: import.meta.env.VITE_TEST_API_URL ?? 'http://localhost:3002/app'
} 

export const toastConfig = {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
    error: {
        style: {
            fontWeight: '500',
        }
    },
    success: {
        duration: 3000
    }
}