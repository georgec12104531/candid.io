import React from "react";
import { ReactComponent as UpArrow } from "../../icons/up-arrow.svg";

import "./search-bar.styles.css";

const SearchBar = ({ handleFilterSearch }) => {
  return (
    <div className="search-bar-main-container">
      <div className="search-bar-container">
        <img
          className="search-icon"
          alt="search"
          src="https://img.icons8.com/cotton/64/000000/search--v2.png"
        />
        <input
          onChange={handleFilterSearch}
          placeholder="Search for your candidate here..."
        ></input>

        <div className="sort-container">
          <div className="sort">Sort</div>
          <UpArrow className="sort-icon"></UpArrow>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
