import React from "react";
import "./StarshipDetails.css";

const StarshipDetails = ({ starship, onBack }) => (
  <div className="starship-details">
    <button onClick={onBack}>Back</button>
    <h2>{starship.name}</h2>
    <p><strong>Model:</strong> {starship.model}</p>
    <p><strong>Passengers:</strong> {starship.passengers}</p>
    <p><strong>Max Speed:</strong> {starship.max_atmosphering_speed}</p>
    <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
    <p><strong>Crew:</strong> {starship.crew}</p>
    <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
  </div>
);

export default StarshipDetails;
