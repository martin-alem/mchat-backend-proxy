/**
 * @author Martin Alemajoh
 * @description Base class for all controllers
 * @date 7/19/2021
 */

const path = require('path');
const SendResponse = require(path.join(__dirname, "../utils/SendResponse"));
const Helper = require(path.join(__dirname, '../utils/Helper'))

class Controller {

    /**
     * Handles invalid request.
     * @param {object} req request object
     * @param {object} res response object
     */
    static invalid(req, res) {
        const statusCode = 404;
        const error = "Invalid request";
        SendResponse.failedResponse(statusCode, req, res, error);
    }

    static async makeRequest(settings, req, res) {

        const response = await Helper.forwardRequest(settings, req.body);
        const statusCode = response.statusCode;
        const message = JSON.parse(response["message"]);
        const headers = response["headers"];
        SendResponse.successResponse(statusCode, req, res, message, headers);
    }
}

module.exports = Controller;