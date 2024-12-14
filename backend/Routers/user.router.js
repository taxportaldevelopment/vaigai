const express = require("express");
const { userDetailsCreate, getAllUser, getSingleDate, getDownloadPdf, getFromAndToDate } = require("../controller/user.controller");
const Routers = express.Router();

// routers
Routers.route("/userdetails").post(userDetailsCreate);
Routers.route("/getallusers").get(getAllUser);
Routers.route("/getsinledata").post(getSingleDate);
Routers.route("/getfromandto/date").post(getFromAndToDate);
Routers.route("/bookingdownload/:id").get(getDownloadPdf);

module.exports = Routers;