import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='center-text'>
      <h1 className="contact-header">Contact The Author</h1>
      <h4>To get a quote for your School or Organization Contact Tribal Eye Productions</h4>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 contact">
            <h5>Mailing Address:</h5>
            <h5>
            P.O. Box 1123
            Santa Ynez, CA 93460
            </h5>
          </div>
          <div className="col-md-4 col-sm-12 contact">
            <h5>Email Me:</h5>
            <h5><a href="mailto:tribaleyepro@gmail.com">tribaleyepro@gmail.com</a></h5>
          </div>
          <div className="col-md-4 col-sm-12 contact">
            <h5>Phone:</h5>
            <h5><a href="tel://8052459630">(805) 245-9630</a></h5>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
