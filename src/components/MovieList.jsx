import React from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../css/ActorsList.module.css";

const MovieList = ({ movies }) => {
  const prefix = "https://image.tmdb.org/t/p/w400/";
  return (
    <ListGroup>
      <Row md={4}>
        {movies.results.map((movie, i) => {
          return (
            <Col xs={6} md={3} lg={2} key={i} className="my-2">
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className={styles.actorContainer}>
                  <Image
                    width={90}
                    height={90}
                    thumbnail
                    src={`${prefix}${movie["poster_path"]}`}
                  />
                  <p className={styles.movielistTitle}>
                    {movie["original_title"]}
                  </p>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </ListGroup>
  );
};

export default MovieList;
