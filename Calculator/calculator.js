const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let bmi = weight / (height * height);

  res.send(`your BMI is ${bmi}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send(`The result of total numbers are ${result}`);
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});
