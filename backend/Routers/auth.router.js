const express = require("express");
const { registerAuth } = require("../controller/auth.controller");
const Routers = express.Router();

// api auth Routers

Routers.route("/register").post(registerAuth);

module.exports = Routers;
