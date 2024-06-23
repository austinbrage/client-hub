import materialsQueries from './materials.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class MaterialsMysql {

    constructor({ materialsPool }) {
        const connectionHandler = new ConnectionHandler('materials');

        this.pool = materialsPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getAll = async () => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.getAll,
               []
            );

            return rows;
        })
    }

    getAllByJob = async ({ job_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.getAllByJob,
               [job_id]
            );

            return rows;
        })
    }

    getAllByProcess = async ({ process_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.getAllByProcess,
               [process_id]
            );

            return rows;
        })
    }

    getByTitle = async ({ title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.getByTitle,
               [title]
            );

            return rows;
        })
    }

    getIdByJob = async ({ job_id, title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.getIdByJob,
               [job_id, title]
            );

            return rows;
        })
    }

    getIdByProcess = async ({ process_id, title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.getIdByProcess,
               [process_id, title]
            );

            return rows;
        })
    }

    addNew = async ({ job_id, process_id, title, description, possible_price }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.addNew,
               [job_id, process_id, title, description, possible_price]
            );

            return rows;
        })
    }

    changeData = async ({ title, description, possible_price, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.changeData,
               [title, description, possible_price, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               materialsQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default MaterialsMysql;