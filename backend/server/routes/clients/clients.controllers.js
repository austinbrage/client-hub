import { ClientsValidation } from './clients.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class ClientsController {

    constructor({ clientsModel }) {
        this.clientsModel = clientsModel;
        this.validateClients = new ClientsValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = asyncErrorHandler(async (_req, res) => {
        const data = await this.clientsModel.getAll();

        return res.status(200).json(createOkResponse({
            message: 'getAll in clients executed successfully',
            data
        }));
    })

    getAllByUser = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.getAllByUser(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.getAllByUser(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAllByUser in clients executed successfully',
            data
        }));
    })

    getByName = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.getByName(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.getByName(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByName in clients executed successfully',
            data
        }));
    })

    getId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.getId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.getId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getId in clients executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'addNew in clients executed successfully',
            data: [data]
        }));
    })

    changeData = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.changeData(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.changeData(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeData in clients executed successfully',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateClients.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.clientsModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in clients executed successfully',
            data: [data]
        }));
    })

}

export default ClientsController;