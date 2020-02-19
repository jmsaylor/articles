const mongoose = require("mongoose");
const express = require("express");
const getTitle = require("../middleware/getTitle");
const router = express.Router();
const { Article } = require("../models/article");

router.get("/", async (req, res) => {
  let articles = await Article.find();
  res.send(articles);
});

router.post("/", async (req, res) => {
  let article = new Article({
    poster: req.body.poster,
    name: req.body.article,
    article: req.body.article
  });

  await article.save();

  res.send(article);
});

module.exports = router;
