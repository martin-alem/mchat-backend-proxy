/**
 * @author Martin Alemajoh
 * @description This controller handles key requests
 * @date 7/19/2021
 */

const path = require('path');
const Controller = require(path.join(__dirname, './Controller'));
const SendResponse = require(path.join(__dirname, "../utils/SendResponse"));
const middleware = require(path.join(__dirname, "../middleware/keyMiddleware"));

class PingController extends Controller {

    static key(req, res) {
        const type = req.body.type;
        const key = type === "private" ? process.env.PRIVATE_KEY : process.env.PUBLIC_KEY;
        const statusCode = 200;
        const message = key;
        SendResponse.successResponse(statusCode, req, res, message);
    }

    static middleware() {
        const middlewareFunctions = [];

        for (const [_, value] of middleware) {
            middlewareFunctions.push(value);
        }
        return middlewareFunctions;
    }

}

module.exports = PingController;