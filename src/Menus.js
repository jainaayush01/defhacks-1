import React from "react";
import {Link} from 'react-router-dom';
import { ListGroup } from "reactstrap";
const Menus = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="#" action>About Us</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/donate" action>Donate</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/view-donors" action>View Donors</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="#" action>Contact Us</Link>
    </ListGroup>
  );
};
export default Menus;