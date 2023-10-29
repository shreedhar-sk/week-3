const express = require("express");
const router = express.Router()


const studentcontroller = require("../controller/studentcontroller")

router.post("/register",studentcontroller.createStudent);

module.exports = router;
