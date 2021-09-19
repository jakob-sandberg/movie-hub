import React from "react";
import MovieCard from "../components/MovieCard";
import { Spinner } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getTopRated } from "../services/API";

const TopRatedMovies = () => {
  const { data, isLoading, isError, error } = useQuery(
    "top-rated",
    getTopRated
  );

  return (
    <Container className="mt-4">
      {isError && <h1>{error}</h1>}

      {isLoading && <Spinner />}

      <Row className="justify-content-center">
        <h1>TOP RANKED MOVIES BY ALL TIME</h1>
        {data &&
          data.results.map((movie, i) => {
            return (
              <Col className="m-2" key={i} sm="12" md={{ size: 6, offset: 3 }}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TopRatedMovies;
