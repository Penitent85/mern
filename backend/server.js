const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware.js");
const port = process.env.PORT || 8080;


const app = express();
app.use(express.json());
// middleware to parse incoming request with JSON payload
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}!`));