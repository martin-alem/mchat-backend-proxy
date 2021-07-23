/**
 * Utility functions
 * 6/28/2021
 * Martin Alemajoh
 */

const { createSign } = require("crypto");
const path = require('path');
const Client = require(path.join(__dirname, '../services/Client'));

class Helper {

    /**
     * Return a formatted data: MM-DD-YYYY
     */
    static getDate() {
        const date = new Date();
        return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    }


    /**
     * Generates code of number length.
     * @param {number} number length of code to generate
     * @returns {string} a string representing the code.
     */
    static getCode(number) {
        let code = "";
        for (let i = 0; i < number; i++) {
            const random = Math.floor(Math.random() * 10);
            code += random.toString(10);
        }

        return code;
    }

    /**
     * Signs and returns a signature
     * @param {any} data 
     * @returns {string} a string representing the signature
     */
    static signToken(data, privateKey) {

        const sign = createSign('SHA256');
        sign.write(data);
        sign.end();
        const signature = sign.sign(privateKey, 'hex');
        return signature;
    }

    /**
     * Gets a color
     * @param {string} flag type of log message
     * @returns {string} a string representing the color.
     */
    static getColor(flag) {
        let color;
        switch (flag) {
            case "INFO":
                color = "green";
                break;
            case "WARNING":
                color = "yellow";
                break
            case "ERROR":
                color = "red"
                break
            default:
                color = "blue";

        }
        return color;
    }

    /**
     * makes an HTTP request to the server and gets a key.
     * @param {string} type type of key. private or public
     * @returns {promise} a promise that will be resolved to a key.
     */
    static async forwardRequest(settings, body = {}) {
        const options = {
            hostname: settings["host"],
            port: settings["port"],
            path: settings["path"],
            method: settings["method"],
            headers: settings["headers"],
            protocol: "https",
            timeout: 10000
        };
        body = JSON.stringify(body);
        const response = await Client.makeRequest(options, body);
        return response;
    }
}

module.exports = Helper;
