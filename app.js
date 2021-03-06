/**
 * @author Martin Alemajoh
 * @description This is the main entry point for the service.
 * @date 7/19/2021
 */

const path = require("path");
const cors = require("cors");
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

var corsOptions = {
    origin: 'http://192.168.0.71:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.options('*', cors());

app.use(cors(corsOptions));
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