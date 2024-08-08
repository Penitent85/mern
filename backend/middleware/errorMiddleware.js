function errorHandler(err, req, res, next) {
    // Set the status code to 500 (Internal Server Error)
    const statusCode =  res.statusCode ? res.statusCode : 500;
    
    res.status(statusCode);

    // Send the error message as JSON
    res.json({
        message: err.message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack 
    });
}

module.exports = {errorHandler , };