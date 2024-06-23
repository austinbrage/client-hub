export const createOkResponse = ({ message, data }) => {
    return {
        success: true,
        result: {
            message: message,
            data: data ? data : null
        }
    }
}

export const createErrorResponse = ({ message, error }) => {

    return {
        success: false,
        error: {
            status: 'fail',
            message: message,
            details: error ? error : null
        }
    }
}