import clientsQueries from './clients.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class ClientsMysql {

    constructor({ clientsPool }) {
        const connectionHandler = new ConnectionHandler('clients');

        this.pool = clientsPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getAll = async () => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.getAll,
               []
            );

            return rows;
        })
    }

    getAllByUser = async ({ user_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.getAllByUser,
               [user_id]
            );

            return rows;
        })
    }

    getByName = async ({ name }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.getByName,
               [name]
            );

            return rows;
        })
    }

    getId = async ({ user_id, name }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.getId,
               [user_id, name]
            );

            return rows;
        })
    }

    addNew = async ({ user_id, name, contact_number, contact_email, description }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.addNew,
               [user_id, name, contact_number, contact_email, description]
            );

            return rows;
        })
    }

    changeData = async ({ name, contact_number, contact_email, description, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.changeData,
               [name, contact_number, contact_email, description, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               clientsQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default ClientsMysql;