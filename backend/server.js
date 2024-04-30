require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const tasksRoute = require("./routes/tasks");

const username = process.env.MONGO_ATLAS_USERNAME;
const password = process.env.MONGO_ATLAS_PASSWORD;
const cluster = process.env.MONGO_ATLAS_CLUSTER;
const dbname = process.env.MONGO_ATLAS_DBNAME;

const MONGO_URI = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

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
