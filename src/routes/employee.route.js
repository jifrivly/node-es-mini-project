const express = require("express");

const {
  getEmployeeList,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers");

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res, next) => {
  const pageIndex = req.query["pageIndex"]
    ? Number(req.query["pageIndex"])
    : 1;
  const pageSize = req.params["pageSize"] ? Number(req.params["pageSize"]) : 10;

  const employees = await getEmployeeList(pageIndex, pageSize)
    .then((res) => res)
    .catch((err) => err);

  res.status(200).json(employees);
});

employeeRouter.get("/:id", async (req, res, next) => {
  const employee = await getEmployeeById(Number(req.params["id"]));
  res.json(employee);
});

employeeRouter.post("/", async (req, res) => {
  const response = await createEmployee(req.body)
    .then((res) => res)
    .catch((err) => err);

  const employees = response;

  console.log(employees);
  res.status(200).json(employees);

  // res.status(400).json({
  //   message: "",
  //   error: "",
  // });
});

module.exports = { employeeRouter };
