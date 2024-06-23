import { ProcessesValidation } from './processes.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class ProcessesController {

    constructor({ processesModel }) {
        this.processesModel = processesModel;
        this.validateProcesses = new ProcessesValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = asyncErrorHandler(async (_req, res) => {
        const data = await this.processesModel.getAll();

        return res.status(200).json(createOkResponse({
            message: 'getAll in processes executed successfully',
            data
        }));
    })

    getAllByJob = asyncErrorHandler(async (req, res) => {
        const validation = this.validateProcesses.getAllByJob(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.processesModel.getAllByJob(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAllByJob in processes executed successfully',
            data
        }));
    })

    getByTitle = asyncErrorHandler(async (req, res) => {
        const validation = this.validateProcesses.getByTitle(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.processesModel.getByTitle(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByTitle in processes executed successfully',
            data
        }));
    })

    getId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateProcesses.getId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.processesModel.getId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getId in processes executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateProcesses.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.processesModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'addNew in processes executed successfully',
            data: [data]
        }));
    })

    changeData = asyncErrorHandler(async (req, res) => {
        const validation = this.validateProcesses.changeData(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.processesModel.changeData(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeData in processes executed successfully',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateProcesses.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.processesModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in processes executed successfully',
            data: [data]
        }));
    })

}

export default ProcessesController;