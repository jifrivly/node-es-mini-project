const express = require("express");

const statusRouter = express.Router();

const appStatus = {
  app: "Employee Management",
  stacks: ["NodeJS", "ExpressJS", "Elastic Search"],
  message: "Employee management app APIs are up and running using express and ES.",
};

/**
 *
 */
statusRouter.get("/", (req, res, next) => {
  res.status(200).json(appStatus);
});

module.exports = { statusRouter };
