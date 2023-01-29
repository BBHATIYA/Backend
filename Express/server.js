const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello from server</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact Bhavesh@gmail.com");
});

app.get("/about", function (req, res) {
  res.send(
    "My name is Bhavesh and I live in berrsheva and work as full stack developer"
  );
});

app.get("/hobbies", function (req, res) {
  res.send("Cricket, reading");
});

app.listen(3002, function () {
  console.log("Server running on port 3002");
});
