const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const axios = require("axios");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName, lastName, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_field: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us18.api.mailchip.com/3.0/lists/3973d130fc";

  const options = {
    method: "POST",
    auth: "bhavesh:bc62d500ae4fce0c3c8fa3dfd0ab0f55 - us18",
  };

  //   const request = await axios.request(ur, options, function (response) {
  //     response.on("data", function(data){
  //         console.log(JSON.parse(data));
  //     })
});

app.listen(3002, function () {
  console.log("Server is running on 3002");
});

// bc62d500ae4fce0c3c8fa3dfd0ab0f55 - us18;

// 3973d130fc
