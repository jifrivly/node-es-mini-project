const { esClient2, esClient1 } = require("../database");

const index = "employees";

/**
 *
 * @param {number} [pageIndex=1]
 * @param {number} [pageSize=10]
 * @returns
 */
const getEmployeeList = async (pageIndex = 1, pageSize = 10) => {
  console.log({ pageIndex, pageSize });
  const employees = await esClient1.search({
    index,
    from: (pageIndex - 1) * pageSize,
    size: pageSize,
  });

  return { employees: employees?.hits?.hits, count: employees?.hits?.total };
};

/**
 *
 * @param {number} employeeId
 * @returns
 */
const getEmployeeById = async (employeeId) => {
  return { id: employeeId, name: null };
};

const createEmployee = async (employeeDetails) => {
  // const employeeData = {};
  const employee = await esClient1
    .index({
      index,
      document: employeeDetails,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return employee;
};

const updateEmployee = (employeeId, employeeDetails) => {
  return employeeDetails;
};

const deleteEmployee = (employeeId) => {
  return employeeId + " deleted";
};

module.exports = {
  getEmployeeList,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
