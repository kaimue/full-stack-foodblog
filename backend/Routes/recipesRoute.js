import express from "express";
import recipe from "../models/recipeSchema.js";
const router = express.Router();

router.get("/recipes", (req, res) => {
  recipe.find({}, (error, data) => {
    if (error) {
      res.status(400).send("no recipes found");
    }
    console.log(data);
    res.json(data);
  });
});

export default router;
