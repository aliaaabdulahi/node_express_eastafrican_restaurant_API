// @desc    Logs request to console
//very simple logger middleware
const logger = (req, res, next) => {
    // what we wanna do here is create a value on this request object that we can then access in any routes that come after this middleware
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
// in every piece of middleware created you need to include next() because that is what is running

module.exports = logger;