import React from "react";

import MoviesOnCinema from "../components/MoviesOnCinema";
import PopularMovies from "../components/PopularMovies";
import TopRankedMovies from "../components/TopRankedMovies";

const HomePage = () => {
  return (
    <div>
      <div className="m-5" style={{ width: "80%" }}>
        <h3 className="mt-5">MOST POPULAR MOVIES RIGHT NOW</h3>
        <PopularMovies />
        <h3 className="mt-5">SOME OF THE TOP RANKED MOVIES BY ALL TIME</h3>
        <TopRankedMovies />
        <h3 className="mt-5">SOME OF THE MOVIES ON CINEMA RIGHT NOW</h3>
        <MoviesOnCinema />
      </div>
    </div>
  );
};

export default HomePage;
