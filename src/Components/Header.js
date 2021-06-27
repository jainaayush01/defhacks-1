import { Card, CardBody, Col, Row } from "reactstrap";
import React from "react-dom";
import img from '../img/github.png'

const Header = () => {
    return (
        <div>
            <Card className="my-2 bg-info">
                <CardBody>
                    <Row>
                        <Col md={11}>
                            <h1 className="text-center my-2">
                                Helper on Maps
                            </h1>
                        </Col>
                        <Col>
                            <a
                                href="https://github.com/straw-hat-coders-defhacks"
                                target="_blank"
                            >
                                <img
                                    src={img}
                                    style={{ width: 50, height: 50 }}
                                    className="my-2"
                                />
                            </a>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
};
export default Header;
