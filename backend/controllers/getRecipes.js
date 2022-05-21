import recipe from "../models/recipe.js";

const getRecipes = async (req, res) => {
  try {
    const recipes = await recipe.find({});
    console.log(recipes);
    await res.json(recipes);
  } catch (error) {
    res.status(500).send("Error getting recipes");
  }
};

export default getRecipes;
