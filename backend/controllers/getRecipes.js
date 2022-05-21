import recipe from "../models/recipe.js";

export const getRecipes = async (req, res) => {
  try {
    const recipes = await recipe.find({});
    console.log(recipes);
    await res.json(recipes);
  } catch (error) {
    res.status(500).send("Error getting recipes");
  }
};

export const getRecipeByKeyword = async (req, res) => {
  const { q } = req.query;
  console.log(req.query);
  try {
    const recipeResults = await recipe.find({
      name: { $regex: q, $options: "$i" },
    });

    await res.json(recipeResults);
  } catch (error) {
    res.status(500).send("Error getting recipes");
  }
};
