const express = require("express");

const app = express();

app.use(express.json());

//get, post, delete, patch

app.get("/home", (req, res) => {
  //   res.send("this is Home api");
  res.json({
    body: {
      message: "Home API",
    },
  });
});

app.post("/add", (req, res) => {
  //   console.log("POST routes");
  res.json(req.body.name);
});

app.listen("3000", () => {
  console.log("Server is running on port 3000!!");
});
