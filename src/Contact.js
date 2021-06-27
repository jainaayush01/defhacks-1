import React from "react";
import { Jumbotron, Button, Container, Col, Row } from "reactstrap";
import img from './connect.png'
const contact = () => {
  return (
    <Container>
      <Row>
        <Col md={1}>
        <img
            src={img}
            style={{ width: 150, height: 150 }}
            className="my-5"
            alt="linkImg"
          ></img>
        </Col>
        <Col>
          <Jumbotron className="text-center ">
            <h1 style={{ fontSize: 75 }} className="my-2">
              Let's talk
            </h1>
            <p style={{ fontSize: 30 }} className="lead">
              Want to connect?<br></br>Our Inbox is always open
            </p>
            <Button color="warning" className="my-4">
              <a
                href={`mailto:zohebcool1542@gmail.com`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                Mail Us!
              </a>
            </Button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default contact;
