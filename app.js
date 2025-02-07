require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const dbURI = `mongodb+srv://${username}:${password}@nodeblog.wo7j5.mongodb.net/blogs?retryWrites=true&w=majority&appName=nodeblog`;

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
