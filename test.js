const { Article } = require("./models/article");

let obo = new Article({
  article: "jambajamba"
});

obo.addLike();

console.log(obo);
