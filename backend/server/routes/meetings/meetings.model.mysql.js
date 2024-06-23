import meetingsQueries from './meetings.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class MeetingsMysql {

    constructor({ meetingsPool }) {
        const connectionHandler = new ConnectionHandler('meetings');

        this.pool = meetingsPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getAll = async () => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.getAll,
               []
            );

            return rows;
        })
    }

    getAllByClient = async ({ client_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.getAllByClient,
               [client_id]
            );

            return rows;
        })
    }

    getByTitle = async ({ title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.getByTitle,
               [title]
            );

            return rows;
        })
    }

    getId = async ({ client_id, title }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.getId,
               [client_id, title]
            );

            return rows;
        })
    }

    addNew = async ({ client_id, title, description, date_time }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.addNew,
               [client_id, title, description, date_time]
            );

            return rows;
        })
    }

    changeData = async ({ title, description, date_time, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.changeData,
               [title, description, date_time, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               meetingsQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default MeetingsMysql;