const express = require("express");
const customerController = require("../controllers/customerController");
const route = express.Router();
route.post("/", customerController.addCustomer);
module.exports = route;
