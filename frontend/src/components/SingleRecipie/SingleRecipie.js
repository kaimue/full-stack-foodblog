import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipies from "../Recipies/Recipies";

function SingleRecipie({ recipies }) {
  const tagName = window.location.pathname.split("/").pop();

  const recipe = recipies.find((recipe) => recipe.name === tagName);

  return (
    <div>
      <div className="container border">
        <h1>{recipe.title}</h1>

        <div className="row">
          <img className="col" src={recipe.imgUrl} alt="Recipe" />
          <div className="container col">
            <p>{recipe.description}</p>
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
    </div>
  );
}

export default SingleRecipie;
