import React, { useState, useEffect } from "react";
import NavBar from "./components/nav-bar/nav-bar.component";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";

import { mapCandidatesForFrontEnd } from "./mapper-service/mapper-service";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");

  useEffect(() => {
    fetchCandidates();
  }, []);

  async function fetchCandidates() {
    const candidatesPromise = await fetch(
      "https://private-anon-b9eedd7f78-sakura3.apiary-mock.com/applicants"
    );

    const candidatesObj = await candidatesPromise.json();
    const newCandidates = mapCandidatesForFrontEnd(candidatesObj);
    setCandidates(newCandidates);
  }

  function handleFilterSearch(e) {
    setFilterSearch(e.target.value);
  }

  let filteredCandidates = candidates.filter(({ firstName, lastName }) => {
    let fullName = `${firstName}${lastName}`;
    return fullName.toLowerCase().includes(filterSearch.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar></NavBar>
      <SearchBar handleFilterSearch={handleFilterSearch}></SearchBar>
      <CardList filteredCandidates={filteredCandidates}></CardList>
      <a href="https://icons8.com/icon/80355/star" className="credit">
        Star icon by Icons8
      </a>
    </div>
  );
}

export default App;
