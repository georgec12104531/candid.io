import React, { useState, useEffect } from "react";
import NavBar from "./components/nav-bar/nav-bar.component";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";

import { mapCandidatesForFrontEnd } from "./mapper-service/mapper-service";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const [currentFilter, setCurrentFilter] = useState("desc");

  useEffect(() => {
    fetchCandidates();
  }, []);

  async function fetchCandidates() {
    const candidatesPromise = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const candidatesObj = await candidatesPromise.json();
    const newCandidates = mapCandidatesForFrontEnd(candidatesObj);
    setCandidates(newCandidates);
  }

  function handleFilterSearch(e) {
    setFilterSearch(e.target.value);
  }

  function handleFilterChange() {
    let newSort;
    console.log("candidates", candidates);
    if (currentFilter === "desc") {
      setCurrentFilter("asc");
      newSort = candidates.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (currentFilter === "asc") {
      setCurrentFilter("desc");
      newSort = candidates.sort((a, b) => (a.name > b.name ? -1 : 1));
    }

    setCandidates(newSort);
  }

  let filteredCandidates = candidates.filter(({ name }) => {
    return name.toLowerCase().includes(filterSearch.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar></NavBar>
      <SearchBar
        handleFilterSearch={handleFilterSearch}
        handleFilterChange={handleFilterChange}
        currentFilter={currentFilter}
      ></SearchBar>
      <CardList filteredCandidates={filteredCandidates}></CardList>
      <a href="https://icons8.com/icon/80355/star" className="credit">
        Star icon by Icons8
      </a>
      <div className="credit">
        Icons made by{" "}
        <a href="https://www.flaticon.com/free-icon/sort_2223770" title="bqlqn">
          bqlqn
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
