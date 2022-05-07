import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: String,
  description: String,
  ingridientTable: String,
  name: String,
  imgUrl: String,
});

const recipe = mongoose.model("recipe", recipeSchema);

export default recipe;
