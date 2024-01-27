// response.util.js

// Function to send a success response
function sendSuccessResponse(res, data = null, message = 'Success', statusCode = 200) {
    res.status(statusCode).json({
        success: true,
        message: message,
        data: data
    });
}

// Function to send an error response
function sendErrorResponse(res, error, statusCode = 500) {
    console.error('Error:', error);
    res.status(statusCode).json({
        success: false,
        error: error.message || 'Internal Server Error'
    });
}

module.exports = { sendSuccessResponse, sendErrorResponse };
