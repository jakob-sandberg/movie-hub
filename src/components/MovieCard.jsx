import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/MovieCard.module.css";

import { Card } from "react-bootstrap";

const prefix = "https://image.tmdb.org/t/p/w400/";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className={styles.hoverZoom}>
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Card
          className={`mx-1 mx-md-3`}
          style={{ width: "270px", background: "none" }}
        >
          <div className={styles.item}>
            <span className={styles.first}>
              <Card.Img
                variant="top"
                src={`${prefix}${movie["poster_path"]}`}
                style={{ height: "390px" }}
              />
            </span>
            <span className={styles.second}>
              <Card.Img
                className={styles.imgAfter}
                variant="top"
                src={`${prefix}${movie["poster_path"]}`}
              />
              <p className={styles.textAfter}></p>
            </span>
          </div>
          <Card.Body>
            <Card.Text className={`${styles.cardTitle} text-center mb-1`}>
              {movie.title}
            </Card.Text>
            <Card.Text className={`${styles.cardText} text-center`}></Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
