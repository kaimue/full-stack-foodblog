import express from "express";
import recipeSchema from "../models/recipeSchema.js";
const router = express.Router();

router.get("/recipes", (req, res) => {
  recipeSchema.find({}, (error, data) => {
    if (error) {
      res.status(400).send("no students found");
    }
    console.log(data);
    res.json(data);
  });
});

export default router;
