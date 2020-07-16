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
        <div className="tooltip">
          Credit Score?
          <span className="tooltiptext">
            <div className="tooltiptext-layout">Bad: 0-5</div>
            <div className="tooltiptext-layout">Neutral: 5-7</div>
            <div className="tooltiptext-layout">Good: 7-10</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
