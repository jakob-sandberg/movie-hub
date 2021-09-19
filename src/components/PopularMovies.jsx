import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useQuery } from "react-query";
import { getPopular } from "../services/API";
import Spinner from "../components/Spinner";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const { data, isLoading, isError, error } = useQuery("popular", getPopular);

  return (
    <Container>
      {isError && <h1>{error}</h1>}
      {isLoading && <Spinner />}
      <Row>
        {data &&
          data.results.slice(0, 4).map((movie, i) => {
            return (
              <Col key={i} sm={12} md={6} lg={3}>
                <MovieCard movie={movie} />{" "}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default PopularMovies;
