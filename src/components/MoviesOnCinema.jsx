import React from "react";
import { Container } from "react-bootstrap";

import { useQuery } from "react-query";
import { getNowPlaying } from "../services/API";

import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

import { Row, Col } from "react-bootstrap";

const MoviesOnCinema = () => {
  const { data, isLoading, isError, error } = useQuery(
    "now-playing",
    getNowPlaying
  );

  if (isError) return <div>{error}</div>;

  return (
    <Container>
      {isError && <h1>{error}</h1>}
      {isLoading && <Spinner />}
      <Row>
        {data &&
          data.results.slice(0, 4).map((movie, i) => {
            return (
              <Col key={i} sm={12} md={3}>
                <MovieCard movie={movie} />{" "}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default MoviesOnCinema;
