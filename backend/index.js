import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import recipes from "./routes/recipes.js";
import cors from "cors";

const app = express();

app.use(cors());

const connection = `mongodb+srv://panaka:${process.env.PW}@cluster0.sacs6.mongodb.net/recipe?retryWrites=true&w=majority`;

mongoose.connect(connection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected to Mongoose."));

app.use(express.json());
app.use("/", recipes);

app.listen("5000", () => console.log("server is running"));
