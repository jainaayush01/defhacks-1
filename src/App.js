import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Menus from "./Menus";
import Home from "./Home";
import AddDonor from './AddDonor'
import AllDonors from './AllDonors'

import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/donate" component={AddDonor} exact />
              <Route path="/view-donors" component={AllDonors} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
