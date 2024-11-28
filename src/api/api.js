import axios from "axios";

const BASE_URL = "https://swapi.dev/api/starships/";

export const fetchStarships = (page = BASE_URL) => 
  axios.get(page).then((res) => res.data);

export const searchStarships = (query) => 
  axios.get(`${BASE_URL}?search=${query}`).then((res) => res.data);
