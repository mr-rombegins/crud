const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postRouter = require("./routes/posts.router");

const app = express();

app.use(express.json());

app.use("/", postRouter);

const start = async () => {
  await dbConnect();

  app.listen(4000, () => {
    console.log("server is up and running");
  });
};

start();
