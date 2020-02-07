const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const home = require("./routes/home");
const articles = require("./routes/articles");
dotenv.config();

options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose
  .connect(
    `mongodb+srv://dino:${process.env.MONGO_PASS}@cluster0-c4ci4.mongodb.net/test?retryWrites=true&w=majority`,
    options
  )
  .then(() => console.log("CONNECTED! SUCCESS!"))
  .catch(err => console.log("Error - Not Connected - Error", err));

app.use(express.json());
app.use("/", home);
app.use("/api/articles", articles);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`));
