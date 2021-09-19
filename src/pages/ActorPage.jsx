import React from "react";
import { Container } from "react-bootstrap";
import { getActorById } from "../services/API";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import MovieList from "../components/MovieList";
import { prefix } from "../services/API";
import styles from "../css/ActorPage.module.css";

const ActorPage = () => {
  const { id } = useParams();

  const { data, isError, error, isLoading } = useQuery(["actor", id], () =>
    getActorById(id)
  );

  return (
    <Container>
      {isError && <div>{error}</div>}
      {isLoading && <Spinner />}

      {data && (
        <div className={styles.moviePageContainer}>
          {data && (
            <>
              <div className={styles.movieinfocontainer}>
                <strong className={styles.title}>{data.actor.name}</strong>
                <div className={styles.miniwrapper}>
                  <div className={styles.posterContainer}>
                    <img
                      className={styles.poster}
                      src={`${prefix}${data.actor["profile_path"]}`}
                      alt="movie poster"
                    />
                  </div>

                  <div className={styles.descContainer}>
                    <p className={styles.bioText}>{data.actor.biography}</p>
                  </div>
                </div>
              </div>
              <div className={styles.actorsMovie}>
                <h2>Other movies where you can see {data.actor.name}</h2>
                <MovieList movies={data.movies} />
              </div>
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default ActorPage;
