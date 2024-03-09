import React from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Bag } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container fluid id="TopMenu">
    <Navbar expand="lg">
      <Navbar.Brand>
        <Image src="/images/StudioGhibliCollectionLogo_6_300x.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#">SHOP</Nav.Link>
          <Nav.Link href="#">FILMOGRAPHY</Nav.Link>
          <Nav.Link href="#">IN THEATERS</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link href="#">LOG IN</Nav.Link>
          <Nav.Link href="#">SEARCH</Nav.Link>
          <Nav.Link id="zero" href="#"><Bag id="bag" /> 0</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default TopMenu;
