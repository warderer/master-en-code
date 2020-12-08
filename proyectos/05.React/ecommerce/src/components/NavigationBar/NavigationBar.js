import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import './navigationbar.scss';

function NavigationBar({ brandName, menuItems, menuItemsShowLimit, customerName, customerAddress, cartItems }) {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
        <LinkContainer to="/">
          <Navbar.Brand>{brandName}</Navbar.Brand>
        </LinkContainer>
        <Container className="col-8 m-0">
        <Form className="w-100">
          <Form.Row>
            <Col className="col-10">
            <FormControl type="text" placeholder="Search" size="lg" className="mr-2"/>
            </Col>
            <Col className="col-2">
              <Button variant="outline-success" size="lg">Search</Button>
            </Col>
          </Form.Row>
        </Form>
        </Container>
        <Container className="col-1 m-0 p-0" >
        <span>
          <Link to="/login">Hi,<br /> {customerName}</Link>
        </span>
        </Container>
        <Container className="col-1 m-0 p-0" >
        <span>
        <Link to="/shoppingCart">Cart Items:<br /> {cartItems}</Link>
        </span>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg" justify-content-center="true">
        <span>Ship: {customerAddress}</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menuItems?.slice(0,menuItemsShowLimit).map((item, index) => <LinkContainer to={"category?"+item} key={index}><Nav.Link>{item}</Nav.Link></LinkContainer>)}
            <NavDropdown title="Ver más" id="basic-nav-dropdown">
              {menuItems?.slice(menuItemsShowLimit).map((item, index) => <LinkContainer to={"category?"+item} key={index}><Nav.Link>{item}</Nav.Link></LinkContainer>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

NavigationBar.propTypes = {
  brandName: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string),
  menuItemsShowLimit: PropTypes.number,
  customerName: PropTypes.string,
  customerAddress: PropTypes.string,
  cartItems: PropTypes.number
}

export default NavigationBar;