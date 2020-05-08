import React from "react";

const SearchBar = ({ handleFilterSearch }) => {
  return (
    <div>
      <input
        onChange={handleFilterSearch}
        placeholder="Search for your candidate here"
      ></input>
      <i class="fas fa-search"></i>
    </div>
  );
};

export default SearchBar;
