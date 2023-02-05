const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.send("Yey it's weekend");
  } else res.send("Boo!! I have to work!");
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});
