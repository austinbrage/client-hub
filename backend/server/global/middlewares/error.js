const globalErrorMiddleware = (error, _req, res, _next) => {
    const message = error.message || 'Internal Server Error';
    const statusCode = error.statusCode || 500; 
    const status = error.status || 'error';
    
    const response = {
        success: false,
        error: {
            status: status,
            message: message,
            validationError: null
        }
    }

    return res.status(statusCode).json(response);
}

export default globalErrorMiddleware;