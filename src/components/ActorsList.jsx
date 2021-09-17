import React from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { prefix } from "../services/API";

import styles from "../css/ActorsList.module.css";

const ActorsList = ({ actors }) => {
  return (
    <ListGroup>
      <Row className="mb-5">
        {actors.slice(0, 12).map((actor, i) => (
          <Col xs={6} md={6} lg={2} key={i} className="my-2">
            <div className={styles.actorContainer}>
              <Link
                to={`/actor/${actor.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Image
                  width={90}
                  height={90}
                  thumbnail
                  src={`${prefix}${actor["profile_path"]}`}
                />

                <div className={styles.actorName}>{actor["original_name"]}</div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </ListGroup>
  );
};

export default ActorsList;
