import { createErrorResponse } from './../../global/utils/responses.js';
import { JobsStringValidation } from './jobs.validations.js';

class SanitizeGetRequests {

    constructor() {
        this.validateStringJobs = new JobsStringValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAllByClient = (req, res, next) => {
        const validation = this.validateStringJobs.getAllByClient(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //client_id goes from string to number
        req.sanitizedData.client_id = parseInt(validation.data.client_id, 10);

        next();
    }

    getId = (req, res, next) => {
        const validation = this.validateStringJobs.getId(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //client_id goes from string to number
        req.sanitizedData.client_id = parseInt(validation.data.client_id, 10);
        //title goes from string to string
        req.sanitizedData.title = validation.data.title;

        next();
    }

}

export default SanitizeGetRequests;