import processesQueries from './processes.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class ProcessesMysql {

    constructor({ processesPool }) {
        const connectionHandler = new ConnectionHandler('processes');

        this.pool = processesPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getAll = async () => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.getAll,
               []
            );

            return rows;
        })
    }

    getAllByJob = async ({ job_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.getAllByJob,
               [job_id]
            );

            return rows;
        })
    }

    getByTitle = async ({ title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.getByTitle,
               [title]
            );

            return rows;
        })
    }

    getId = async ({ job_id, title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.getId,
               [job_id, title]
            );

            return rows;
        })
    }

    addNew = async ({ job_id, title, status, description, deadline }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.addNew,
               [job_id, title, status, description, deadline]
            );

            return rows;
        })
    }

    changeData = async ({ title, status, description, deadline, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.changeData,
               [title, status, description, deadline, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               processesQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default ProcessesMysql;