const mongoose = require("mongoose");
require("mongoose-type-url");
const url = require("url");

let articleSchema = new mongoose.Schema({
  poster: {
    //might wanna think about storing these seperately normalized vs. denormalized
    type: String
  },
  article: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: "Blank Name Field" // see /functions/getTitle
  },
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

articleSchema.methods.addLike = function() {
  this.likes += 1;
};

let Article = mongoose.model("Articles", articleSchema);

exports.Article = Article;
