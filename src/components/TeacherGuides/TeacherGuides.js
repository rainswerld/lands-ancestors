import React from 'react'
import { CardDeck, Card, Button, Link } from 'react-bootstrap'
import './CardsUI.css'

function BookCard() {
  return (
    <CardDeck className="teacher-guides justify-content-center">
      <Card className="book card card-color">
          <a href="https://www.amazon.com/Lands-Our-Ancestors-Teachers-Guide/dp/098002725X/ref=sr_1_1?dchild=1&keywords=land+of+our+ancestors+teachers&qid=1603908872&sr=8-11" target="_blank"><Card.Img variant="top" src={require('../../assets/LOOA-1-FrontCvr.jpg')} alt="Lands Of Our Ancestors Book One" /></a>
          <Card.Body className="card-color">
            <Card.Title>Book One: Mission Period</Card.Title>
            <Card.Text>
              Book One of the Lands of our Ancestors series begins this multi-generational, historical saga, depicting what life might have been like for on Chumash family during the Mission Period, the Mexican Rancho Era, the Gold Rush and the early years of California statehood.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted btn"><Button href="https://www.amazon.com/Lands-Our-Ancestors-Teachers-Guide/dp/098002725X/ref=sr_1_1?dchild=1&keywords=land+of+our+ancestors+teachers&qid=1603908872&sr=8-1" target="_blank" variant="primary">Teacher Guide</Button></small>
          </Card.Footer>
      </Card>
      <Card className="book card">
          <a href="https://www.amazon.com/Lands-Ancestors-Book-Teachers-Guide/dp/0692162585/ref=sr_1_3?dchild=1&keywords=land+of+our+ancestors+teachers&qid=1603908872&sr=8-3" target="_blank"><Card.Img variant="top" src={require('../../assets/LOOA-2-FrontCvr.jpg')} alt="Lands Of Our Ancestors Book One" /></a>
          <Card.Body className="card-color">
            <Card.Title>Book Two: Mexican Rancho Era</Card.Title>
            <Card.Text>
              Book Two continues the saga as the characters grow up and have children of their own who face more challenges in the Mexican Rancho Era.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted btn"><Button href="https://www.amazon.com/Lands-Ancestors-Book-Teachers-Guide/dp/0692162585/ref=sr_1_3?dchild=1&keywords=land+of+our+ancestors+teachers&qid=1603908872&sr=8-3" target="_blank" variant="primary">Teacher Guide</Button></small>
          </Card.Footer>
      </Card>
      <Card className="book card">
          <a href="https://www.amazon.com/Lands-Ancestors-Three-Teachers-Guide/dp/0980027292/ref=sr_1_2?dchild=1&keywords=land+of+our+ancestors+teachers&qid=1603908872&sr=8-2" target="_blank"><Card.Img variant="top" src={require('../../assets/LOOA-3-FrontCvr.jpg')} alt="Lands Of Our Ancestors Book One" /></a>
          <Card.Body className="card-color">
            <Card.Title>Book Three: Gold Rush-Statehood</Card.Title>
            <Card.Text>
              Book Three follows the family into the goldrush and early years of California statehood, a period that proves to be the most devestating and destructive era ever faced by California's indigenous peoples.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted btn"><Button href="https://www.amazon.com/Lands-Ancestors-Three-Teachers-Guide/dp/0980027292/ref=sr_1_2?dchild=1&keywords=land+of+our+ancestors+teachers&qid=1603908872&sr=8-2" target="_blank" variant="primary">Teacher Guide</Button></small>
          </Card.Footer>
      </Card>
    </CardDeck>
  )
}

export default BookCard
