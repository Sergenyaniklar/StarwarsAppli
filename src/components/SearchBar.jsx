import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit} className="search-bar">
    <input
      type="text"
      placeholder="Search by Name or Model"
      value={searchQuery}
      onChange={onSearchChange}
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
