import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

function Recipies({ recipies, pushRecipies }) {
  return (
    <div>
      <Searchbar pushRecipies={pushRecipies}></Searchbar>
      {recipies.map((recipe) => (
        <div className="container border">
          <h1>{recipe.title}</h1>

          <div className="row">
            <img className="col" src={recipe.imgUrl} alt="Recipe" />
            <div className="container col">
              <p>{recipe.description}</p>
              <p>{recipe.i}</p>
              <Link to={recipe.name}>
                <button className="btn btn-info" type="button">
                  Click here to see full Recipe
                </button>
              </Link>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Recipies;
