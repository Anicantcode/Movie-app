const PROXY_URL = "https://cors-anywhere.herokuapp.com/"; // only for my local development can be removed later on
const API_KEY = "";// enter your own api key here to get it go to themoviedb and get one
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${PROXY_URL}${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${PROXY_URL}${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};
