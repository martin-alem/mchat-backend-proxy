/**
 * @author Martin Alemajoh
 * @description This route handles request made to /ping route in-order to communicate the status of the server.
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const router = express.Router({ caseSensitive: true });

const Logger = require(path.join(__dirname, "../utils/Logger"));
const SendResponse = require(path.join(__dirname, "../utils/SendResponse"));
const Controller = require(path.join(__dirname, "../controllers/KeyController"));

router.get("/secrete/:secrete/type/:type", Controller.middleware(), (req, res) => Controller.key(req, res));

router.use((error, req, res, next) => {
    Logger.logError(error.error, __filename, new Date());
    SendResponse.failedResponse(error.statusCode, req, res, error.error);
});

router.use(Controller.invalid);

module.exports = router;