const express = require("express");

const { employeeRouter } = require("./employee.route");
const { statusRouter } = require("./status.route");

const indexRouter = express.Router();

/**
 *
 */
indexRouter.get("/", (req, res, next) => {
  res.redirect("/status");
});

module.exports = { indexRouter, employeeRouter, statusRouter };
