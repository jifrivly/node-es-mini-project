const { esClient1 } = require("../database");

const index = "attendance";

/**
 *
 * @param {number} [pageIndex=1]
 * @param {number} [pageSize=10]
 * @returns
 */
const getAttendanceList = async (pageIndex = 1, pageSize = 10) => {
  const attendances = await esClient1.search({ index });

  return {
    attendances: attendances?.hits?.hits,
    count: attendances?.hits?.total,
  };
};

/**
 *
 * @param {number} attendanceId
 * @returns
 */
const getAttendanceById = async (attendanceId) => {
  return { id: attendanceId, name: null };
};

const createAttendance = async (attendanceDetails) => {
  // const attendanceData = {};
  const attendance = await esClient1
    .index({
      index,
      document: attendanceDetails,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return attendance;
};

const updateAttendance = (attendanceId, attendanceDetails) => {
  return attendanceDetails;
};

const deleteAttendance = (attendanceId) => {
  return attendanceId + " deleted";
};

module.exports = {
  getAttendanceList,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
};
