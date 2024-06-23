import { createErrorResponse } from './../../global/utils/responses.js';
import { UsersStringValidation } from './users.validations.js';

class SanitizeGetRequests {

    constructor() {
        this.validateStringUsers = new UsersStringValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getByExternalId = (req, res, next) => {
        const validation = this.validateStringUsers.getByExternalId(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //auth_provider goes from string to string | null
        req.sanitizedData.auth_provider = validation.data.auth_provider === 'null' ? null : validation.data.auth_provider;
        //external_id goes from string to string | null
        req.sanitizedData.external_id = validation.data.external_id === 'null' ? null : validation.data.external_id;

        next();
    }

    getAll = (req, res, next) => {
        const validation = this.validateStringUsers.getAll(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //id goes from string to number
        req.sanitizedData.id = parseInt(validation.data.id, 10);

        next();
    }

}

export default SanitizeGetRequests;