import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import recipeSchema from "./models/recipeSchema.js";
const app = express();

app.use(express.json());

const connection = `mongodb+srv://panaka:${process.env.PW}@cluster0.sacs6.mongodb.net/cluster0?retryWrites=true&w=majority`;

mongoose.connect(connection);
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error")
);

app.post("/student", (req, res) => {
  if (!req.body) {
    res.status(400);
  }
  const { name, first_name, email } = req.body;
  const recipe = { name, first_name, email };
  recipeSchema.create(recipe, (error, data) => {
    if (error) {
      console.log("there was an error creating a new student", error);
    }
    res.status(200).send("student got created");
  });
});

app.get("/students", (req, res) => {
  recipeSchema.find({}, (error, data) => {
    if (error) {
      res.status(400).send("no students found");
    }
    res.json(data);
  });
});

app.listen("3000", () => console.log("server is running"));
