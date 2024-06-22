import { parseErrors } from "./parseError.js";

export class ValidationError extends Error {
    
    constructor(zodError) {
        const message = parseErrors(zodError);
        super(message);

        this.name = 'ValidationError';
        this.details = zodError;
        Error.captureStackTrace(this, this.constructor);
    }
}