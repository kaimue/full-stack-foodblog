import express from "express";
import { getRecipes, getRecipeByKeyword } from "../controllers/getRecipes.js";

const router = express.Router();

router.get("/recipes", getRecipes);

router.get("/search", getRecipeByKeyword);

export default router;
