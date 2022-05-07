import express from "express";
import recipe from "../models/recipeSchema.js";
const router = express.Router();

router.get("/recipes/:name", (req, res) => {
  recipe.find({}, (error, data) => {
    if (error) {
      res.status(400).send("no recipe found");
    }
    //console.log(req);
    const singleRecipe = data.find((recipe) => recipe.name === req.params.name);
    console.log(singleRecipe);
    res.send(singleRecipe); //
  });
});

export default router;
