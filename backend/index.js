import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import recipeSchema from "./models/recipeSchema.js";
import recipesRoute from "./Routes/recipesRoute.js";
const app = express();

app.use(express.json());
app.use("/home", recipesRoute);

const connection = `mongodb+srv://panaka:${process.env.PW}@cluster0.sacs6.mongodb.net/recipe?retryWrites=true&w=majority`;

mongoose.connect(connection);
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error")
);

app.listen("3000", () => console.log("server is running"));
