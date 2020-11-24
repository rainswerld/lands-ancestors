import React from 'react'
import { Button } from 'react-bootstrap'
import './Welcome.css'
// import urlConfig from '../../urlConfig.js'

function WelcomeBooks() {
  return (
    <div className="container welcome">
      <div className="row">
        <div className="col text-center">
          <h1 className="header-text">An Exciting Multi-generational Saga</h1>
          <p className="welcome-text">The Lands of our Ancestors series follows three generations of a Chumash Indian family as they face the dangerous challenges brought by the major eras of California history: the Spanish Mission era, the Mexican Rancho period, the Gold Rush, and the Early Years of Statehood. The books and accompanying Teacher Guides meet state history-social studies standards for the 4th grade.
          <br/></p>
          <p className="welcome-text-2">Check out the books below or click on the button to find out about Educational Discounts.</p>
          <Button href='/contact' className="homepage-btn">Contact Me</Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBooks
