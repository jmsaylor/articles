const path = require("path");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const { Article } = require("../models/article");

router.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views/forum.html"));
  } catch (error) {}
});

module.exports = router;
