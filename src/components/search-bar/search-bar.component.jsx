import React from "react";
import { ReactComponent as UpArrow } from "../../icons/up-arrow.svg";
import { ReactComponent as DownArrow } from "../../icons/down-arrow.svg";
import "./search-bar.styles.css";

const SearchBar = ({
  handleFilterSearch,
  handleFilterChange,
  currentFilter,
}) => {
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
        <div className="sort-container" onClick={handleFilterChange}>
          <div className="sort">Sort</div>
          <div>
            {currentFilter === "asc" ? (
              <UpArrow className="sort-icon"></UpArrow>
            ) : (
              <DownArrow className="sort-icon"></DownArrow>
            )}
          </div>
        </div>
        <div class="tooltip">
          credit score?
          <span class="tooltiptext">
            <div className="asdf">Bad: 0-5</div>
            <div className="asdf">Neutral: 5-7</div>
            <div className="asdf">Good: 7-10</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
