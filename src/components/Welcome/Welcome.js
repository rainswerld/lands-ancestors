import React from 'react'
import { Button } from 'react-bootstrap'
import './Welcome.css'

function Welcome() {
  return (
    <div className="container welcome">
      <div className="row">
        <div className="col text-center">
          <h1 className="header-text">A Portal for Students and Teachers</h1>
          <p className="welcome-text">Follow three generations of a Chumash Indian family as they face the dangerous challenges of the major eras of California history: the Spanish Mission Era, the Mexican Rancho Period, Gold Rush and Early Years of California Statehood.
          <br/></p>
          <p className="welcome-text-2">Check out all three books below or click the button to get more information on the teacher guide</p>
          <Button href="teacher-guides" className="homepage-btn">Teacher Guides</Button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
