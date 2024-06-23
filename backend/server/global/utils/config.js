import { config } from "dotenv";

config();

(() => {
    const allowedEnvironments = ['development', 'production', 'test'];

    if (!allowedEnvironments.includes(process.env.NODE_ENV)) {
        console.log(`
            The environment '${process.env.NODE_ENV}' is not valid.
            It must be one of: ${allowedEnvironments.join(', ')}. Exiting
        `);
        process.exit(1);
    }
})();

export const ENVIRONMENT = process.env.NODE_ENV ?? 'production';
export const SIGNED_URL_EXPIRE = process.env.SIGNED_URL_EXPIRE ?? '3600';

export const JWT_EXPIRE = process.env.JWT_EXPIRE;
export const SECRET_KEY = process.env.SECRET_KEY;

export const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const PORT = {
    development: process.env.DEV_PORT ?? 3000,
    production: process.env.PROD_PORT ?? 3001,
    test: process.env.TEST_PORT ?? 3002
} 

export const DB_CONFIG = {
    development: {
        port: process.env.DEV_DB_PORT,
        host: process.env.DEV_DB_HOST,
        user: process.env.DEV_DB_USER,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABASE,
    },
    production: {
        port: process.env.PROD_DB_PORT,
        host: process.env.PROD_DB_HOST,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_DATABASE,
    },
    test: {
        port: process.env.TEST_DB_PORT,
        host: process.env.TEST_DB_HOST,
        user: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_DATABASE,
    },
}