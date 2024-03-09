import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Movies = () => (
  <Container id="movies">
    <Row>
      <h2 className="text-center my-5"><strong>All Films</strong></h2>
    </Row>
    <Row className="justify-content-center gx-5 my-1">
      <Col sm={12} md={4}>
        <Card className="myFooter">
          <Card.Img variant="top" src="/images/howl.webp" />
          <Card.Footer>Howl&apos;s Moving Castle</Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/spiritedaway.webp" />
          <Card.Footer className="myFooter">Spirited Away</Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/catreturns.webp" />
          <Card.Footer className="myFooter">The Cat Returns</Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-center gx-5 my-5">
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/kiki.webp" />
          <Card.Footer className="myFooter">Kiki&apos;s Delivery Service</Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/ponyo.webp" />
          <Card.Footer className="myFooter">Ponyo</Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/totoro.webp" />
          <Card.Footer className="myFooter">My Neighbor Totoro</Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-center gx-5 my-5">
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/castleinthesky.webp" />
          <Card.Footer className="myFooter">Castle In the Sky</Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/kaguya.webp" />
          <Card.Footer className="myFooter">The Tale of Princess Kaguya</Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Img variant="top" src="/images/arrietty.webp" />
          <Card.Footer className="myFooter">The Secret World of Arrietty</Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Movies;
