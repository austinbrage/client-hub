import { createErrorResponse } from './../../global/utils/responses.js';
import { MaterialsStringValidation } from './materials.validations.js';

class SanitizeGetRequests {

    constructor() {
        this.validateStringMaterials = new MaterialsStringValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAllByJob = (req, res, next) => {
        const validation = this.validateStringMaterials.getAllByJob(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //job_id goes from string to number | null

        next();
    }

    getAllByProcess = (req, res, next) => {
        const validation = this.validateStringMaterials.getAllByProcess(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //process_id goes from string to number | null

        next();
    }

    getIdByJob = (req, res, next) => {
        const validation = this.validateStringMaterials.getIdByJob(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //job_id goes from string to number | null
        //title goes from string to string
        req.sanitizedData.title = validation.data.title;

        next();
    }

    getIdByProcess = (req, res, next) => {
        const validation = this.validateStringMaterials.getIdByProcess(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //process_id goes from string to number | null
        //title goes from string to string
        req.sanitizedData.title = validation.data.title;

        next();
    }

}

export default SanitizeGetRequests;