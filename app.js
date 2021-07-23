/**
 * @author Martin Alemajoh
 * @description This is the main entry point for the service.
 * @date 7/19/2021
 */

const path = require("path");
const express = require("express");
const app = express();

const pingRouter = require(path.join(__dirname, "routes/pingRoute"));
const authRoute = require(path.join(__dirname, "routes/authRoute"));
const signupRoute = require(path.join(__dirname, "routes/signupRoute"));
const resetRoute = require(path.join(__dirname, "routes/resetRoute"));

var corsOptions = {
    origin: 'http://192.168.0.71:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/**
 * Manual cors configuration
 */
app.options("*", (req, res) => {
    res.status(200);
    res.set("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.set("Access-Control-Allow-Credentials", true);
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Credentials");
    res.end();
});

//app settings
app.set("x-powered-by", false);

//parse json payloads and makes it available on the req object.
app.use(express.json());

//Authentication Route middleware
app.use("/auth", authRoute);

//Registration Route middleware
app.use("/signup", signupRoute);

//Password Reset Route middleware
app.use("/reset", resetRoute);

app.use("/", pingRouter);


module.exports = app;