/**
 * @author Martin Alemajoh
 * @description This route handles request made to /signup route
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const router = express.Router({ caseSensitive: true });

const LoginController = require(path.join(__dirname, "../controllers/LoginController"));

router.post("/", (req, res) => LoginController.login(req, res));
router.use(LoginController.invalid);

module.exports = router;