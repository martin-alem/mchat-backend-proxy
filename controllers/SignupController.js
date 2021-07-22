/**
 * @author Martin Alemajoh
 * @description This controller handles Signup requests
 * @date 7/19/2021
 */

const path = require('path');
const Controller = require(path.join(__dirname, './Controller'));
const profile = require(path.join(__dirname, "../server/profile"));

class SignupController extends Controller {

    static async signup(req, res) {

        const settings = {
            host: profile["signup"]["host"],
            port: profile["signup"]["port"],
            headers: profile["signup"]["headers"],
            path: profile["signup"]["signup"]["path"],
            method: profile["signup"]["signup"]["method"]
        }

        SignupController.makeRequest(settings, req, res);
    }

    static async verify(req, res) {
        const settings = {
            host: profile["signup"]["host"],
            port: profile["signup"]["port"],
            headers: profile["signup"]["headers"],
            path: profile["signup"]["verify"]["path"],
            method: profile["signup"]["verify"]["method"]
        }

        SignupController.makeRequest(settings, req, res);
    }

    static async resend(req, res) {
        const settings = {
            host: profile["signup"]["host"],
            port: profile["signup"]["port"],
            headers: profile["signup"]["headers"],
            path: profile["signup"]["resend"]["path"],
            method: profile["signup"]["resend"]["method"]
        }

        SignupController.makeRequest(settings, req, res);
    }

    static async setup(req, res) {
        const settings = {
            host: profile["signup"]["host"],
            port: profile["signup"]["port"],
            headers: profile["signup"]["headers"],
            path: profile["signup"]["setup"]["path"],
            method: profile["signup"]["setup"]["method"]
        }

        SignupController.makeRequest(settings, req, res);
    }

}

module.exports = SignupController;