import React from "react";
import "./StarshipList.css";

const StarshipList = ({ starships, onStarshipClick, loadMore }) => (
  <div className="starship-list">
    {starships.map((starship, index) => (
      <div 
        key={index} 
        className="starship-card" 
        onClick={() => onStarshipClick(starship)}
      >
        <h3>{starship.name}</h3>
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
      </div>
    ))}
    {loadMore && <button onClick={loadMore}>Load More</button>}
  </div>
);

export default StarshipList;
