import React from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap'
import './CardsUI.css'

function BookCard() {
  return (
    <CardDeck className="books">
      <Card className="book card-color">
          <Card.Img variant="top" src="https://bloximages.chicago2.vip.townnews.com/syvnews.com/content/tncms/assets/v3/editorial/f/d5/fd5d3812-73d4-5a39-841a-c114bfcd8f87/5bac07f545080.preview.jpg?crop=313%2C235%2C0%2C132&resize=1200%2C900&order=crop%2Cresize" alt="Lands Of Our Ancestors Book One" />
          <Card.Body className="card-color">
            <Card.Title>Book One</Card.Title>
            <Card.Text>
              Book One of the Lands of our Ancestors series begins this multi-generational, historical saga, depicting what life might have been like for on Chumash family during the Mission Period, the Mexican Rancho Era, the Gold Rush and the early years of California statehood.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted btn"><Button variant="primary">Book</Button><Button variant="primary">Book & Teacher Guide</Button></small>
          </Card.Footer>
      </Card>
      <Card className="book">
          <Card.Img variant="top" src="https://bloximages.chicago2.vip.townnews.com/syvnews.com/content/tncms/assets/v3/editorial/f/d5/fd5d3812-73d4-5a39-841a-c114bfcd8f87/5bac07f545080.preview.jpg?crop=313%2C235%2C0%2C132&resize=1200%2C900&order=crop%2Cresize" alt="Lands Of Our Ancestors Book One" />
          <Card.Body className="card-color">
            <Card.Title>Book Two</Card.Title>
            <Card.Text>
              Book Two continues the saga as the characters grow up and have children of their own who face more challenges in the Mexican Rancho Era.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted btn"><Button variant="primary">Book</Button><Button variant="primary">Book & Teacher Guide</Button></small>
          </Card.Footer>
      </Card>
      <Card className="book">
          <Card.Img variant="top" src="https://bloximages.chicago2.vip.townnews.com/syvnews.com/content/tncms/assets/v3/editorial/f/d5/fd5d3812-73d4-5a39-841a-c114bfcd8f87/5bac07f545080.preview.jpg?crop=313%2C235%2C0%2C132&resize=1200%2C900&order=crop%2Cresize" alt="Lands Of Our Ancestors Book One" />
          <Card.Body className="card-color">
            <Card.Title>Book Three</Card.Title>
            <Card.Text>
              Book Three follows the family into the goldrush and early years of California statehood, a period that proves to be the most devestating and destructive era ever faced by California's indigenous peoples.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted btn"><Button variant="primary">Book</Button><Button variant="primary">Book & Teacher Guide</Button></small>
          </Card.Footer>
      </Card>
    </CardDeck>
  )
}

export default BookCard
