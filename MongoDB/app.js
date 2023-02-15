const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
mongoose.set("strictQuery", false);

app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/api/", userRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth/", authRoutes);

app.listen("3000", () => {
  console.log("Server is running on port 3000!!");
});

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err.message);

    console.log("Database Connected!");
  }
);
