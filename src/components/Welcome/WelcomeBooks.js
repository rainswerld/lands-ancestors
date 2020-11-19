import React from 'react'
import { Button } from 'react-bootstrap'
import './Welcome.css'

function WelcomeBooks() {
  return (
    <div className="container welcome">
      <div className="row">
        <div className="col text-center">
          <h1 className="header-text">A Portal for Teachers, Students and Parents</h1>
          <p className="welcome-text">Designed for 4th grade readers, this historical novel series presents California history from a Native American point of view using a set of Native characters that draw young students in and keep them engaged. Classroom tested and tribally endorsed, these books are loved by students, educators and parents alike.
          <br/></p>
          <p className="welcome-text-2">Check out the books below or click on the button to find out about Educational Discounts.</p>
          <Button href="contact" className="homepage-btn">Contact Me</Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBooks
