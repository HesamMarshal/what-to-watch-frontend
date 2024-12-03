// src/services/movies.js
// import axios from "axios";
import API from "./api";

export const fetchTrendingMovies = async () => {
  // const response = axios.get("https://backend.whattowatch.ir/movies/trending", {
  //   withCredentials: false, // If cookies or authentication tokens are involved
  // });

  const response = await API.get(
    "https://backend.whattowatch.ir/movies/trending"
  );

  return response.data;
};
