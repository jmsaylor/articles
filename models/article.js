const mongoose = require("mongoose");
require("mongoose-type-url");
const url = require("url");

let Article = mongoose.model(
  "Articles",
  new mongoose.Schema({
    poster: {
      //might wanna think about storing these seperately normalized vs. denormalized
      type: String
    },
    article: {
      type: mongoose.SchemaTypes.Url,
      required: true
    },
    name: {
      type: String,
      default: "Blank Name Field" //wanted to create default value with something from url
    },
    likes: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default: Date.now
    }
  })
);

exports.Article = Article;
