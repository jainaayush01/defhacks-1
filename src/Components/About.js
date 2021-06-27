import React from "react";
import { Container, Row, Col } from "reactstrap";
import img1 from "../img/earth.png";
import img2 from "../img/work.png";

const About = () => {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md={2}>
                        <img
                            src={img1}
                            style={{ width: 90, height: 90 }}
                            className="mx-3 my-5"
                            alt="earthImg"
                        ></img>
                    </Col>
                    <Col className="my-4 mx-4">
                        <h3 className="my-3">What is it?</h3>
                        <p>
                            An app to connect people in need of medicines with
                            providers of resources.<br></br> An extensive
                            repository of Covid Resources provided by the
                            people, for the people.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={2}>
                        <img
                            src={img2}
                            style={{ width: 130 }}
                            className="px-2 py-3 my-5"
                            alt="workImg"
                        ></img>
                    </Col>
                    <Col className="mx-4 my-4">
                        <h3 className="my-3">How do we do it?</h3>
                        <ul>
                            <li>
                                Clean, user-friendly design that loads fast.
                            </li>
                            <li>
                                A database of resources and location details
                                that is updated in real time.
                            </li>
                            <li>
                                A team of volunteers who are working round the
                                clock to verify and update information.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
export default About;
