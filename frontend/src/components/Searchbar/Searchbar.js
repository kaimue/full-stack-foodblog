import React, { useEffect, useState } from "react";

const Searchbar = ({ pushRecipies }) => {
  const [wordQuery, setWordQuery] = useState("");

  useEffect(() => {
    const searchRecipies = async () => {
      const url = `http://localhost:5000/search?q=${wordQuery}`;
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          console.log("searchbla" + wordQuery);
          pushRecipies(data);
        } else {
          console.error("Fetch error!");
          return "No recipies found!!";
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    searchRecipies();
  }, [wordQuery]);

  return (
    <div class="container">
      <div class="form-group">
        <label>Search:</label>
        <input
          class="form-control"
          onChange={(event) => setWordQuery(event.target.value)}
          type="text"
          placeholder="Search for recipies ..."
        />
      </div>
    </div>
  );
};
export default Searchbar;
