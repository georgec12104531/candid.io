import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";

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
      <div className="navigator-container"></div>
      <input
        onChange={handleFilterSearch}
        placeholder="Search for your candidate here"
      ></input>
      <CardList filteredCandidates={filteredCandidates}></CardList>
    </div>
  );
}

export default App;
