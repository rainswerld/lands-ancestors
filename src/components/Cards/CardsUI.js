import React from 'react'
import { CardDeck, Card, Button, Container, Row, Col } from 'react-bootstrap'
import './CardsUI.css'

function BookCard() {
  return (
    <Container>
      <CardDeck className="books justify-content-center">
        <Row>
          <Col className='book-card' lg={4} md={6} sm={12}>
            <Card className="book card card-color">
                <a href="https://www.amazon.com/Lands-Our-Ancestors-Gary-Robinson/dp/0692780181/ref=sr_1_1?dchild=1&keywords=lands+of+our+ancestors&qid=1603908795&sr=8-1" target="_blank"><Card.Img variant="top" src={require('../../assets/LOOA-1-FrontCvr.jpg')} alt="Lands Of Our Ancestors Book One" /></a>
                <Card.Body className="card-color">
                  <Card.Title>Book One: Mission Period</Card.Title>
                  <Card.Text>
                    This multi-generational, historical saga begins with Book One by depicting what life might have been like during the Spanish Mission Era, as seen through the eyes of two Chumash boys.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="buttons">
                  <small className="text-muted btn"><Button href="https://www.amazon.com/Lands-Our-Ancestors-Gary-Robinson/dp/0692780181/ref=sr_1_1?dchild=1&keywords=lands+of+our+ancestors&qid=1603908795&sr=8-1" target="_blank" variant="primary">Buy Book</Button>
                  </small>
                </Card.Footer>
            </Card>
          </Col>
          <Col className='book-card' lg={4} md={6} sm={12}>
            <Card className="book card card-color">
                <a href="https://www.amazon.com/Lands-Our-Ancestors-Book-Two/dp/0980027284/ref=sr_1_3?dchild=1&keywords=lands+of+our+ancestors&qid=1603908795&sr=8-3" target="_blank"><Card.Img variant="top" src={require('../../assets/LOOA-2-FrontCvr.jpg')} alt="Lands Of Our Ancestors Book One" /></a>
                <Card.Body className="card-color">
                  <Card.Title>Book Two: Mexican Rancho Era</Card.Title>
                  <Card.Text>
                    Book Two continues the saga as the characters grow up and have children of their own who face more challenges in the Mexican Rancho Era.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="buttons">
                  <small className="text-muted btn"><Button href="https://www.amazon.com/Lands-Our-Ancestors-Book-Two/dp/0980027284/ref=sr_1_3?dchild=1&keywords=lands+of+our+ancestors&qid=1603908795&sr=8-3" target="_blank" variant="primary">Buy Book</Button>
                  </small>
                </Card.Footer>
            </Card>
          </Col>
          <Col className='book-card' lg={4} md={6} sm={12}>
            <Card className="book card card-color">
                <a href="https://www.amazon.com/Lands-our-Ancestors-Book-Three/dp/0578495163/ref=sr_1_2?dchild=1&keywords=lands+of+our+ancestors&qid=1603908795&sr=8-2" target="_blank"><Card.Img variant="top" src={require('../../assets/LOOA-3-FrontCvr.jpg')} alt="Lands Of Our Ancestors Book One" /></a>
                <Card.Body className="card-color">
                  <Card.Title>Book Three: Gold Rush-Statehood</Card.Title>
                  <Card.Text>
                    Book Three follows the family into the goldrush and early years of California statehood, a period that proves to be the most devestating and destructive era ever faced by California's indigenous peoples.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="buttons">
                  <small className="text-muted btn"><Button href="https://www.amazon.com/Lands-our-Ancestors-Book-Three/dp/0578495163/ref=sr_1_2?dchild=1&keywords=lands+of+our+ancestors&qid=1603908795&sr=8-2" target="_blank" variant="primary">Buy Book</Button>
                  </small>
                </Card.Footer>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </Container>
  )
}

export default BookCard
