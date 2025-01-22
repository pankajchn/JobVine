const express = require("express");
const signup = require("../controllers/authControllers");


const authRouter = express.Router();

authRouter.post("/register", signup);

module.exports = authRouter;
