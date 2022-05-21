import express from "express";
import recipe from "../models/recipe.js";
const router = express.Router();

router.get("/recipes/:name", (req, res) => {
  recipe.find({ name: req.params.name }, (error, data) => {
    if (error) {
      res.status(400).send("no recipe found");
    }
    res.send(data);
  });
});

export default router;
