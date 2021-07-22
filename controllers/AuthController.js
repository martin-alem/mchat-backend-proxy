/**
 * @author Martin Alemajoh
 * @description This controller handles login requests
 * @date 7/19/2021
 */

const path = require('path');
const Controller = require(path.join(__dirname, './Controller'));
const profile = require(path.join(__dirname, "../server/profile"));

class AuthController extends Controller {

    static async login(req, res) {

        const settings = {
            host: profile["auth"]["host"],
            port: profile["auth"]["port"],
            path: profile["auth"]["login"]["path"],
            method: profile["auth"]["login"]["method"],
            headers: profile["auth"]["headers"]
        }

        AuthController.makeRequest(settings, req, res);
    }

    static async logout(req, res) {

        const settings = {
            host: profile["auth"]["host"],
            port: profile["auth"]["port"],
            path: profile["auth"]["logout"]["path"],
            method: profile["auth"]["logout"]["method"],
            headers: profile["auth"]["headers"]
        }

        AuthController.makeRequest(settings, req, res);
    }

}

module.exports = AuthController;