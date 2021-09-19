

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

//get movies playing on cinema 
export const getNowPlaying = async () => {
  const data = await get(`/movie/now_playing?api_key=${API_KEY}&region=se`);
  return data.data;
};

//get most popular movies  in sweden right now
export const getPopular = async () => {
  const data = await get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=se`
  );
  return data.data;
};

//get top rated movies in sweden
export const getTopRated = async () => {
  const data = await get(`/movie/top_rated?api_key=${API_KEY}&region=se`);

  return data.data;
};

// list of genres
export const getGenres = async () => {
  const data = await get(`/genre/movie/list?api_key=${API_KEY}`);

  return data.data;
};

//movies by genre
export const getMoviesInGenre = async (genreId, page) => {
  const data = await get(
    `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
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

//get movies for an actor

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
