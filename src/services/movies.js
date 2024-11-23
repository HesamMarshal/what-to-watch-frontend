// src/services/movies.js
import API from "./api";

export const fetchTrendingMovies = async () => {
  const response = await API.get("/movies/fetch-trending");
  return response.data;
};
