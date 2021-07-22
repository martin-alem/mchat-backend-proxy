/**
 * @author Martin Alemajoh
 * @description This route handles request made to /signup route
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const router = express.Router({ caseSensitive: true });

const LogoutController = require(path.join(__dirname, "../controllers/LogoutController"));

router.get("/", (req, res) => LogoutController.logout(req, res));
router.use(LogoutController.invalid);

module.exports = router;