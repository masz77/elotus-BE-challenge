const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/", authController.logIn);

module.exports = authRouter;
