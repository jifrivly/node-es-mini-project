const {
  getEmployeeList,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./employee.controller");

const {
  getAttendanceList,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} = require("./attendance.controller");

module.exports = {
  getEmployeeList,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAttendanceList,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
};
