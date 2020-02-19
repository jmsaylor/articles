const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const articles = require("./routes/articles");
require("cors");
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://dino:${process.env.MONGO_PASS}@cluster0-c4ci4.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("CONNECTED! SUCCESS!"))
  .catch(err => console.log("Error - Not Connected - Error", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/articles", articles);

app.use(express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`));
