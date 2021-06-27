import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Menus from "./Menus";
import Home from "./Home";
import About from './About';
import AddDonor from './AddDonor';
import AllDonors from './AllDonors';
import Contact from './Contact'
import Header from "./Header";
function App() {
  return (
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
              <Route path="/about-us" component={About} exact/>
              <Route path="/donate" component={AddDonor} exact />
              <Route path="/view-donors" component={AllDonors} exact />
              <Route path="/contact-us" component={Contact} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
