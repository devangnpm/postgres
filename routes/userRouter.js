// routes/userRouter.js
const express = require("express");
const { getUsernames, createUsernameGet, createUsernamePost } = require("../controllers/userController"); // Ensure all function names match

const userRouter = express.Router();

userRouter.get("/", getUsernames); // This will log usernames to the console
userRouter.get("/new", createUsernameGet); // Display the form
userRouter.post("/new", createUsernamePost); // Handle form submission

module.exports = userRouter; // Export the router
