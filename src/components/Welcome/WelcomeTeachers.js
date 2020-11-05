import React from 'react'
import { Button } from 'react-bootstrap'
import './Welcome.css'

function Welcome() {
  return (
    <div className="container welcome-teachers">
      <div className="row justify-content-center">
        <div className="col text-center">
          <h1 className="header-text-teach">Lands of our Ancestors Teacher Guides</h1>
          <p className="welcome-text-teach">The Lands of our Ancestors books and teacher guides offer educators an instructional package that meets California State History-Social Science Standards and provides an appropriate alternative for teaching the 4 th grade state history. This includes units on the pre-contact California Native period, the Spanish Mission Period, Mexican Rancho Era, the Gold Rush and Early Statehood. The guides were designed and developed by experienced California elementary school educators and include 1) Historical overviews of each period, 2) Collection of images depicting the era, 3) Words to Know each chapter, 4) Chapter Questions and 5) Student Projects. A fourth grade teacher had this to say about the books and guides: “The books and teacher guides are an exemplary resource for the classroom. The stories are engaging and entice students to further research the historical periods, including the treatment of California Indians. The guides provide us with historical context for the books as well as visual examples of housing, maps, etc.” <br/> <span className="quote">- Mimi Ryan, Bob Holcomb Elementary, San Bernardino City U.S.D.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
