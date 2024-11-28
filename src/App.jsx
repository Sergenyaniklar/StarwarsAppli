import React, { useState, useEffect } from "react";
import { fetchStarships, searchStarships } from "./api/api";
import StarshipList from "./components/StarshipList";
import StarshipDetails from "./components/StarshipDetails";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchStarships().then((data) => {
      setStarships(data.results);
      setNextPage(data.next);
    });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchStarships(searchQuery).then((data) => {
      setStarships(data.results);
      setNextPage(data.next);
    });
  };

  const handleLoadMore = () => {
    fetchStarships(nextPage).then((data) => {
      setStarships((prev) => [...prev, ...data.results]);
      setNextPage(data.next);
    });
  };

  return (
    <div className="app">
      <h1>Star Wars Starships</h1>
      {!selectedStarship ? (
        <>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
            onSearchSubmit={handleSearchSubmit}
          />
          <StarshipList
            starships={starships}
            onStarshipClick={setSelectedStarship}
            loadMore={nextPage ? handleLoadMore : null}
          />
        </>
      ) : (
        <StarshipDetails
          starship={selectedStarship}
          onBack={() => setSelectedStarship(null)}
        />
      )}
    </div>
  );
};

export default App;
