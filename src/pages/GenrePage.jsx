import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useQuery } from "react-query";

import { getMoviesInGenre } from "../services/API";

import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

import styles from "../css/MoviePage.module.css";

import { useUrlSearchParams } from "use-url-search-params";

const GenrePage = () => {
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
  );

  const [page, setPage] = useState(searchParams.page);

  const { id } = useParams();

  useEffect(() => {
    setSearchParams({ ...searchParams, page });
  }, [page, searchParams, setSearchParams]);

  const { data, isError, isLoading, error, isPreviousData } = useQuery(
    ["genre", id, searchParams.page],
    () => getMoviesInGenre(id, searchParams.page),
    {
      keepPreviousData: true,
    }
  );

  if (isError) return <div>{error}</div>;
  return (
    <Container>
      {isLoading && <Spinner />}
      {data && (
        <Pagination
          page={searchParams.page}
          setPage={setPage}
          isPreviousData={isPreviousData}
          total={data["total_pages"]}
        />
      )}
      <Row>
        {data &&
          data.results.map((movie, i) => {
            return (
              <Col className="p-2" key={i} sm={12} md={3}>
                <div className={styles.genreContainer}>
                  <MovieCard movie={movie} />
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default GenrePage;
