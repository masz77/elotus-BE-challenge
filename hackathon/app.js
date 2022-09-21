const express = require("express");
const app = express();

//initial set up
app.use(express.json()); //communication using json

const authRouter = require("./routes/auth.js");

app.use("/login", authRouter);

//handle unhandled routes middleware
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    msg: `can't find /${req.originalUrl} on this server`,
  });
});

//handle errors middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  res.statusCode(err.statusCode).json({
    status: err.status,
    msg: err.message,
  });
});

module.exports = app;
