/**
 * @author Martin Alemajoh
 * @description This route handles request made to /signup route
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const router = express.Router({ caseSensitive: true });

const AuthController = require(path.join(__dirname, "../controllers/AuthController"));

router.post("/login", (req, res) => AuthController.login(req, res));
router.get("/logout", (req, res) => AuthController.logout(req, res));
router.use(AuthController.invalid);

module.exports = router;