import "./App.css";
import {React, useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Sawo from 'sawo'

import Menus from "./Components/Menus";
import Home from "./Components/Home";
import About from "./Components/About";
import AddDonor from "./Components/AddDonor";
import AllDonors from "./Components/AllDonors";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

function App() {
    const [payload, setPayload] = useState(false);

    useEffect(() => {
        var config = {
            containerID: "sawo-container",
            identifierType: "email",
            apiKey: "6412accf-b00b-44e1-aec3-240d63bb63ed",
            onSuccess: (payload) => {
                setPayload(payload);
            },
        };
        let sawo = new Sawo(config);
        sawo.showForm();
    }, []);

    return (
        <>
            {!payload && (
                <div style={{ textAlign: "center" }}>
                    <div
                        id="sawo-container"
                        style={{
                            margin: "auto",
                            height: "300px",
                            width: "300px",
                        }}
                    ></div>
                </div>
            )}
            {payload && (
                <div>
                    <Router>
                        <Container>
                            <Header />
                            <Row>
                                <Col md={4}>
                                    <Menus />
                                </Col>
                                <Col md={8}>
                                    <Route path="/" component={Home} exact />
                                    <Route
                                        path="/about-us"
                                        component={About}
                                        exact
                                    />
                                    <Route
                                        path="/donate"
                                        component={AddDonor}
                                        exact
                                    />
                                    <Route
                                        path="/view-donors"
                                        component={AllDonors}
                                        exact
                                    />
                                    <Route
                                        path="/contact-us"
                                        component={Contact}
                                        exact
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Router>
                </div>
            )}
        </>
    );
}

export default App;
