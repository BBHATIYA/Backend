const express = require("express");
const router = express.Router();

const UserModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  //1. verify email, 2. password verificaiton -> return response

  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) return res.send("Invalid email!");

  const passVerification = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!passVerification) return res.send("Invalid Passowrd!");

  const token = jwt.sign({ _id: user._id }, process.env.SECRET);
  user.password = undefined;
  res.json({
    body: {
      user: user,
      token: token,
    },
  });
});

module.exports = router;
