const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=3a5928f4cdf32e13973209a3eced314c&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const weatherDescription = weatherData.weather[0].description;
      res.write(`<p>The weather Description is ${weatherDescription} </p>`);
      res.write(`<h1>The temperature in London is ${temp} degrees</h1> `);
      res.write(`<img src = ${imageUrl}>`);
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});
