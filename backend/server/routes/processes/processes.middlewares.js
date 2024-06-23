import { createErrorResponse } from './../../global/utils/responses.js';
import { ProcessesStringValidation } from './processes.validations.js';

class SanitizeGetRequests {

    constructor() {
        this.validateStringProcesses = new ProcessesStringValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAllByJob = (req, res, next) => {
        const validation = this.validateStringProcesses.getAllByJob(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //job_id goes from string to number
        req.sanitizedData.job_id = parseInt(validation.data.job_id, 10);

        next();
    }

    getId = (req, res, next) => {
        const validation = this.validateStringProcesses.getId(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //job_id goes from string to number
        req.sanitizedData.job_id = parseInt(validation.data.job_id, 10);
        //title goes from string to string
        req.sanitizedData.title = validation.data.title;

        next();
    }

}

export default SanitizeGetRequests;