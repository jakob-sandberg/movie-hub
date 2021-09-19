import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";

import { getPopular } from "../services/API";

import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

const MostPopularMoviesPage = () => {
  const { data, isLoading, isError, error } = useQuery("popular", getPopular);
  return (
    <Container className="mt-4 d-flex">
      {isError && <h1>{error}</h1>}

      {isLoading && <Spinner />}

      <Row className="justify-content-around">
        <h1>POPULAR MOVIES RIGHT NOW</h1>
        {data &&
          data.results.map((movie, i) => {
            return (
              <Col
                key={i}
                className="m-2"
                style={{ maxHeight: "500px" }}
                sm={12}
                md={4}
                lg={3}
              >
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default MostPopularMoviesPage;
