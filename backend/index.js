import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import recipeSchema from "./models/recipeSchema.js";
import recipesRoute from "./Routes/recipesRoute.js";
import recipeRoute from "./Routes/recipeRoute.js";
const app = express();

const connection = `mongodb+srv://panaka:${process.env.PW}@cluster0.sacs6.mongodb.net/recipe?retryWrites=true&w=majority`;

mongoose.connect(connection);
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error")
);

app.use(express.json());
app.use("/", recipesRoute);
app.use("/", recipeRoute);

app.listen("5000", () => console.log("server is running"));
