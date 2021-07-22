/**
 * @author Martin Alemajoh
 * @description This controller handles logout requests
 * @date 7/19/2021
 */

const path = require('path');
const Controller = require(path.join(__dirname, './Controller'));
const Helper = require(path.join(__dirname, '../utils/Helper'))
const SendResponse = require(path.join(__dirname, "../utils/SendResponse"));
const profile = require(path.join(__dirname, "../server/profile"));

class LogoutController extends Controller {

    static async logout(req, res) {

        const settings = {
            host: profile["auth"]["host"],
            port: profile["auth"]["port"],
            path: profile["auth"]["logout"]["path"],
            method: profile["auth"]["logout"]["method"],
            headers: profile["auth"]["headers"]
        }

        const response = await Helper.forwardRequest(settings, req.body);
        const statusCode = response.statusCode;
        const message = JSON.parse(response["message"]);
        const headers = response["headers"];
        SendResponse.successResponse(statusCode, req, res, message, headers);
    }

}

module.exports = LogoutController;