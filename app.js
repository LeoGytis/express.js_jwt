require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
