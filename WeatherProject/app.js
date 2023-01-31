const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "3a5928f4cdf32e13973209a3eced314c";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const weatherDescription = weatherData.weather[0].description;
      res.write(`<p>The weather Description is ${weatherDescription} </p>`);
      res.write(`<h1>The temperature in ${query} is ${temp} degrees</h1> `);
      res.write(`<img src = ${imageUrl}>`);
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});
