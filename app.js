const express = require("express");
const userRouter = require("./routes/userRouter.js");


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

app.listen(3000);