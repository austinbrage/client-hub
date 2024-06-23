import jobsQueries from './jobs.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class JobsMysql {

    constructor({ jobsPool }) {
        const connectionHandler = new ConnectionHandler('jobs');

        this.pool = jobsPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getAll = async () => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.getAll,
               []
            );

            return rows;
        })
    }

    getAllByClient = async ({ client_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.getAllByClient,
               [client_id]
            );

            return rows;
        })
    }

    getByTitle = async ({ title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.getByTitle,
               [title]
            );

            return rows;
        })
    }

    getId = async ({ client_id, title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.getId,
               [client_id, title]
            );

            return rows;
        })
    }

    addNew = async ({ client_id, title, price, status, deadline, description }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.addNew,
               [client_id, title, price, status, deadline, description]
            );

            return rows;
        })
    }

    changeData = async ({ title, price, status, deadline, description, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.changeData,
               [title, price, status, deadline, description, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               jobsQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default JobsMysql;