import { MeetingsValidation } from './meetings.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class MeetingsController {

    constructor({ meetingsModel }) {
        this.meetingsModel = meetingsModel;
        this.validateMeetings = new MeetingsValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = asyncErrorHandler(async (_req, res) => {
        const data = await this.meetingsModel.getAll();

        return res.status(200).json(createOkResponse({
            message: 'getAll in meetings executed successfully',
            data
        }));
    })

    getAllByClient = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMeetings.getAllByClient(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.meetingsModel.getAllByClient(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAllByClient in meetings executed successfully',
            data
        }));
    })

    getByTitle = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMeetings.getByTitle(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.meetingsModel.getByTitle(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByTitle in meetings executed successfully',
            data
        }));
    })

    getId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMeetings.getId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.meetingsModel.getId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getId in meetings executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMeetings.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.meetingsModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'addNew in meetings executed successfully',
            data: [data]
        }));
    })

    changeData = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMeetings.changeData(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.meetingsModel.changeData(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeData in meetings executed successfully',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMeetings.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.meetingsModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in meetings executed successfully',
            data: [data]
        }));
    })

}

export default MeetingsController;