/**
 * @author Martin Alemajoh
 * @description This controller handles reset requests
 * @date 7/19/2021
 */

const path = require('path');
const Controller = require(path.join(__dirname, './Controller'));
const profile = require(path.join(__dirname, "../server/profile"));

class ResetController extends Controller {

    static async reset(req, res) {

        const settings = {
            host: profile["reset"]["host"],
            port: profile["reset"]["port"],
            headers: profile["reset"]["headers"],
            path: profile["reset"]["reset"]["path"],
            method: profile["reset"]["reset"]["method"]
        }

        ResetController.makeRequest(settings, req, res);
    }

    static async verify(req, res) {
        const settings = {
            host: profile["reset"]["host"],
            port: profile["reset"]["port"],
            headers: profile["reset"]["headers"],
            path: profile["reset"]["verify"]["path"],
            method: profile["reset"]["verify"]["method"]
        }

        ResetController.makeRequest(settings, req, res);
    }

    static async resend(req, res) {
        const settings = {
            host: profile["reset"]["host"],
            port: profile["reset"]["port"],
            headers: profile["reset"]["headers"],
            path: profile["reset"]["resend"]["path"],
            method: profile["reset"]["resend"]["method"]
        }

        ResetController.makeRequest(settings, req, res);
    }

    static async change(req, res) {
        const settings = {
            host: profile["reset"]["host"],
            port: profile["reset"]["port"],
            headers: profile["reset"]["headers"],
            path: profile["reset"]["change"]["path"],
            method: profile["reset"]["change"]["method"]
        }

        ResetController.makeRequest(settings, req, res);
    }

}

module.exports = ResetController;