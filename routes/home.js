const path = require("path");
const express = require("express");
const router = express.Router();

let directory =
  "/home/yamakito/CareerDevs/javascript101/fundamentals/api101/Capstone_Project/html";

router.get("/", (req, res) => res.sendFile(path.join(directory, "index.html")));

module.exports = router;
