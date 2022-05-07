import React from "react";
import { Link } from "react-router-dom";

function Recipies({ recipies }) {
  return (
    <div>
      {recipies.map((recipe) => (
        <div className="container border">
          <h1>{recipe.title}</h1>

          <div className="row">
            <img className="col" src={recipe.imgUrl} alt="Recipe" />
            <div className="container col">
              <p>{recipe.description}</p>
              <Link to={recipe.fields.slug}>
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
