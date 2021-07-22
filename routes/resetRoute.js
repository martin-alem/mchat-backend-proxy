/**
 * @author Martin Alemajoh
 * @description This route handles request made to /signup route
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const router = express.Router({ caseSensitive: true });

const ResetController = require(path.join(__dirname, "../controllers/ResetController"));

router.post("/", (req, res) => ResetController.reset(req, res));
router.post("/verify", (req, res) => ResetController.verify(req, res));
router.post("/resend", (req, res) => ResetController.resend(req, res));
router.post("/change", (req, res) => ResetController.change(req, res))
router.use(ResetController.invalid);

module.exports = router;