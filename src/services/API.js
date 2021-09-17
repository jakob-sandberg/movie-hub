/**
 * TMDB REST API Service
 *
 * Reference: https://developers.themoviedb.org/3/getting-started/introduction
 *
 */

import axios from "axios";

const API_KEY = "d362ef15a49581e6e16a5e0c2847b919";

export const prefix = "https://image.tmdb.org/t/p/w400/";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

/**
 *
 * Get get movies with various endpoints
 * returns a @promise
 */

const get = async (endpoint) => {
  const data = await axios.get(endpoint);
  return data;
};

/**
 *
 * get movies playing on cinema in sweden right now
 *
 */

export const getNowPlaying = async () => {
  const data = await get(`/movie/now_playing?api_key=${API_KEY}&region=se`);
  return data.data;
};

/**
 *
 * get most popular movies  in sweden right now
 *
 * // use this one instead
 * /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10
 * https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=10&api_key=0dd7b23e90e1f5fb99986582b77937d0
 */

export const getPopular = async () => {
  const data = await get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=se`
  );

  // sort returning data in ascending order based on vote-average
  //const sorted = sortInAscOrder(data?.data?.results);

  return data.data;
};

/**
 *
 * get top rated movies in sweden
 */

export const getTopRated = async () => {
  const data = await get(`/movie/top_rated?api_key=${API_KEY}&region=se`);

  return data.data;
};

// get list of genres
export const getGenres = async () => {
  const data = await get(`/genre/movie/list?api_key=${API_KEY}`);

  return data.data;
};

//get movies by genre
//https://api.themoviedb.org/3/discover/movie?api_key=0dd7b23e90e1f5fb99986582b77937d0&with_genres=35&page=10
export const getMoviesInGenre = async (genreId, page) => {
  const data = await get(
    `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );

  return data.data;
};

// get movie by id

export const getMovieById = async (id) => {
  const data = await get(
    `/movie/${id}?&append_to_response=credits&api_key=${API_KEY}`
  );
  return data.data;
};

const getMoviesForActor = async (id) => {
  const data = await get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${id}`
  );

  return data.data;
};

export const getActorById = async (id) => {
  const data = await get(`/person/${id}?api_key=${API_KEY}`);
  // make request for the actors movies and combine in respons.
  const movies = await getMoviesForActor(id);
  return { movies, actor: data.data };
};
