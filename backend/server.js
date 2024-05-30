require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const tasksRoute = require("./routes/tasks");

const MONGO_URI = process.env.MONGO_URI || "mongodb://mongodb:27017/ToDoAppDb"

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not connected"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan());

app.use(tasksRoute);

app.listen(5000, console.log("Running on 5000"));
