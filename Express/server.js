const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello from server</h1>");
});

app.listen(3002, function () {
  console.log("Server running on port 3002");
});