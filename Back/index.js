const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

const port = 8000;

const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

app.use(express.json());

mongoose
  .connect("mongodb://localhost/todolist", connectionOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});
