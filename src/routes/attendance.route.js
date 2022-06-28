const express = require("express");

const {
  getAttendanceList,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../controllers");

const attendanceRouter = express.Router();

attendanceRouter.get("/", async (req, res, next) => {
  const attendances = await getAttendanceList()
    .then((res) => res)
    .catch((err) => err);

  res.status(200).json(attendances);
});

attendanceRouter.get("/:id", async (req, res, next) => {
  const attendance = await getAttendanceById(Number(req.params["id"]));
  res.json(attendance);
});

attendanceRouter.post("/", async (req, res) => {
  const response = await createAttendance(req.body)
    .then((res) => res)
    .catch((err) => err);

  const attendances = response;

  console.log(attendances);
  res.status(200).json(attendances);

  // res.status(400).json({
  //   message: "",
  //   error: "",
  // });
});

module.exports = { attendanceRouter };
