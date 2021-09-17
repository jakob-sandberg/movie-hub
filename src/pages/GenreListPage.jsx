import React from "react";
import { Link } from "react-router-dom";
import { Container, ListGroup, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/API";
import styles from "../css/ActorsList.module.css";

const GenreListPage = () => {
  const { data, isError, isLoading, error } = useQuery("genres", getGenres);

  if (isError) return <div className="text-center py-5">{error}</div>;

  return (
    <Container className="d-flex justify-content-center">
      <ListGroup variant="flush" className={styles.listContainer}>
        <Row className="mb-5">
          <h1>Genres</h1>
          {data &&
            data.genres.map((genre, i) => (
              <Col key={i} className="my-2">
                <div className={styles.genreContainer}>
                  <Link
                    to={`/genre/${genre.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {genre.name}
                  </Link>
                </div>
              </Col>
            ))}
        </Row>
      </ListGroup>
    </Container>
  );
};

export default GenreListPage;
