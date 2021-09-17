import React from "react";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMovieById } from "../services/API";

import styles from "../css/MoviePage.module.css";

import ActorsList from "../components/ActorsList";

const prefix = "https://image.tmdb.org/t/p/w400/";

const MoviePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(["movie, id"], () =>
    getMovieById(id)
  );

  console.log(data);

  if (isError) return <div>{error}</div>;

  return (
    <div className={styles.moviePageContainer}>
      {data && (
        <div className={styles.movieinfocontainer}>
          <strong className={styles.title}>{data.title}</strong>
          <div className={styles.miniwrapper}>
            <div className={styles.posterContainer}>
              <img
                className={styles.poster}
                src={`${prefix}${data["poster_path"]}`}
                alt="movie poster"
              />
            </div>
            <div className={styles.descContainer}>
              <p>
                <span className={styles.bold}>Runtime:</span> {data.runtime} min
              </p>
              <p>
                <span className={styles.bold}>Genre:</span>{" "}
                {data.genres[0].name}
              </p>

              <p>
                <span className={styles.bold}>Director:</span>{" "}
                {data.credits.crew[1].name}
              </p>
              <p>
                <span className={styles.bold}>Description:</span>{" "}
                {data.overview}
              </p>
            </div>
          </div>
          <div className={styles.actors}>
            <h1>Actors</h1>
            <ActorsList actors={data.credits.cast} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
