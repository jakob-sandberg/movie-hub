import React from "react";

import MoviesOnCinema from "../components/MoviesOnCinema";
import PopularMovies from "../components/PopularMovies";
import TopRankedMovies from "../components/TopRankedMovies";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div style={{ width: "80%" }}>
        <h3 className="mt-5">Filmer på bio just nu</h3>
        <MoviesOnCinema />
        <h3 className="mt-5">Populäraste filmerna</h3>
        <PopularMovies />
        <h3 className="mt-5">Topprankade filmer</h3>
        <TopRankedMovies />
      </div>
    </div>
  );
};

export default HomePage;
