const express = require("express");
const employeeRouter = require("./employee");
// const deptRouter = require("./department")


const router = express.Router();

router.use("/employee", employeeRouter);
// router.use("/deptDetails", deptRouter);

module.exports = router;