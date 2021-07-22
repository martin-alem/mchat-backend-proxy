/**
 * @author Martin Alemajoh
 * @description Holds all the middleware functions  for signup
 */

const middleware = new Map();

function validateParams(req, res, next) {
    const payload = req.params;
    if (Object.keys(payload).length === 0 || !payload.secrete || !payload.type) {
        const statusCode = 400;
        const error = "Please provide secrete and type";
        next({ error, statusCode });
        return;
    }
    next();
}

function validate(req, res, next) {
    console.log(req.params)
    const { secrete, type } = req.params;
    const keySecrete = process.env.SECRETE;
    if (secrete !== keySecrete || !["private", "public"].includes(type)) {
        const statusCode = 400;
        const error = "Invalid secrete or type";
        next({ error, statusCode });
        return;
    }
    req.body.type = type;
    next();

}


middleware.set("validateParams", validateParams);
middleware.set("validate", validate);

module.exports = middleware;
