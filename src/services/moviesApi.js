const baseURL = "https://api.themoviedb.org/3/";
const keyAPI = "26b654b472517a9b848f2c87e7e6e457";

// "https://api.themoviedb.org/3/movie/550?api_key=26b654b472517a9b848f2c87e7e6e457";

const fetchTrendingMovies = () => {
  return fetch(`${baseURL}trending/all/day?api_key=${keyAPI}`).then((res) =>
    res.json().then((res) => res.results)
  );
};

const fetchSearchMovies = (query) => {
  return fetch(
    `${baseURL}search/movie?api_key=${keyAPI}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json().then((res) => res.results));
};

const fetchMovieDetails = (movieId) => {
  return fetch(
    `${baseURL}movie/${movieId}?api_key=${keyAPI}&language=en-US`
  ).then((res) => res.json().then((res) => res));
};

const fetchMovieCredits = (movieId) => {
  return fetch(
    `${baseURL}movie/${movieId}/credits?api_key=${keyAPI}&language=en-US`
  ).then((res) => res.json().then((res) => res.cast));
};

const fetchMovieReviews = (movieId) => {
  return fetch(
    `${baseURL}movie/${movieId}/reviews?api_key=${keyAPI}&language=en-US`
  ).then((res) => res.json().then((res) => res.results));
};

export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
