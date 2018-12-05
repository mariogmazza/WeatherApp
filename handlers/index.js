module.exports = {
    ...require('./getWeather')
}

module.exports.errors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        error:{
            message: err.message || 'Something went wrong'
        }
    });
}

module.exports.notFound = (req, res, next) => {
    const err = new Error("Not found pepe");
    err.status = 404;

    next(err); 
}