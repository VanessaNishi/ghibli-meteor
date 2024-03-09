import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

const FirstFooter = () => (
  <footer className="myFooter py-4">
    <Container>
      <Row className="py-3">
        <Col style={{ textAlign: 'left' }} sm={2}>
          <ul>
            <li><h5><strong>ABOUT</strong></h5></li>
            <li><a href="/#" className="bottomLinks">Studio Ghibli</a></li>
            <li><a href="/#" className="bottomLinks">GKIDS</a></li>
            <li><a href="/#" className="bottomLinks">FAQs</a></li>
            <li><a href="/#" className="bottomLinks">Contact Us</a></li>
          </ul>
        </Col>
        <Col style={{ textAlign: 'left' }} sm={2}>
          <ul>
            <li><h5><strong>INFORMATION</strong></h5></li>
            <li><a href="/#" className="bottomLinks">Filmography</a></li>
            <li><a href="/#" className="bottomLinks">In Theaters</a></li>
            <li><a href="/#" className="bottomLinks">Shop</a></li>
          </ul>
        </Col>
        <Col style={{ textAlign: 'left' }} sm={5}>
          <ul>
            <li><h5><strong>NEWSLETTER SIGN UP</strong></h5></li>
            <li className="signup">Sign up for exclusive updates, new arrivals & insider only discounts</li>
            <li>
              <input type="text" placeholder="enter your email address" />
              <Button title="SUBMIT" className="myButton">SUBMIT</Button>
            </li>
          </ul>
        </Col>
        <Col style={{ textAlign: 'left' }} sm={3}>
          <ul>
            <li><h5><strong>PRESENTED BY</strong></h5></li>
            <li><Image src="/images/GKidsLogo_200x.avif" style={{ paddingBottom: '30px' }} /></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FirstFooter;
