/**
 * @author Martin Alemajoh
 * @description This route handles request made to /signup route
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const router = express.Router({ caseSensitive: true });

const SignupController = require(path.join(__dirname, "../controllers/SignupController"));

router.post("/", (req, res) => SignupController.signup(req, res));
router.post("/verify", (req, res) => SignupController.verify(req, res));
router.post("/resend", (req, res) => SignupController.resend(req, res));
router.post("/setup", (req, res) => SignupController.setup(req, res))
router.use(SignupController.invalid);

module.exports = router;