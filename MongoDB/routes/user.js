const express = require("express");

const router = express.Router();

const UserModel = require("../models/Users");

const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyjwt");

//get, post, delete, patch

//localhost:3000/api/home

//1. generate a salt -> random tax
//2. hash a password -> hash(password, salt)

router.get("/token", (req, res) => {
  const token = jwt.sign({ _id: "ds_123456" }, process.env.SECRET);
  res.send(token);
});

router.get("/home", (req, res) => {
  //   res.send("this is Home api");
  res.json({
    body: {
      message: "Home API",
    },
  });
});

router.post("/add", async (req, res) => {
  const schema = {
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(6).required(),
  };

  const { error } = Joi.validate(req.body, schema);
  // res.send(error.details[0].message);
  if (error) return res.send(error.details[0].message);

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  const save = await user.save();

  try {
    res.send(save);
  } catch (error) {
    res.send(error);
  }
});

router.get("/all", verifyToken, async (req, res) => {
  const users = await UserModel.find();

  try {
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

//localhost:3000/api/user/12112121
//Get users by id
router.get("/user/:id", async (req, res) => {
  //   res.send(req.params.id);
  const id = req.params.id;

  const user = await UserModel.findById(id);

  try {
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  const deleteUser = await UserModel.remove({
    _id: id,
  });

  try {
    res.send(deleteUser);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/user/:id", async (req, res) => {
  const id = req.params.id;

  const updatUser = await UserModel.update(
    {
      _id: id,
    },
    {
      $set: req.body,
    }
  );

  try {
    res.send(updatUser);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
