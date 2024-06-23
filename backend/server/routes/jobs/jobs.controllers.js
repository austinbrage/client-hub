import { JobsValidation } from './jobs.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class JobsController {

    constructor({ jobsModel }) {
        this.jobsModel = jobsModel;
        this.validateJobs = new JobsValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = asyncErrorHandler(async (_req, res) => {
        const data = await this.jobsModel.getAll();

        return res.status(200).json(createOkResponse({
            message: 'getAll in jobs executed successfully',
            data
        }));
    })

    getAllByClient = asyncErrorHandler(async (req, res) => {
        const validation = this.validateJobs.getAllByClient(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.jobsModel.getAllByClient(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAllByClient in jobs executed successfully',
            data
        }));
    })

    getByTitle = asyncErrorHandler(async (req, res) => {
        const validation = this.validateJobs.getByTitle(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.jobsModel.getByTitle(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByTitle in jobs executed successfully',
            data
        }));
    })

    getId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateJobs.getId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.jobsModel.getId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getId in jobs executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateJobs.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.jobsModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'addNew in jobs executed successfully',
            data: [data]
        }));
    })

    changeData = asyncErrorHandler(async (req, res) => {
        const validation = this.validateJobs.changeData(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.jobsModel.changeData(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeData in jobs executed successfully',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateJobs.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.jobsModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in jobs executed successfully',
            data: [data]
        }));
    })

}

export default JobsController;