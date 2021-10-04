import React from 'react'
import { Button } from 'react-bootstrap'
import './Welcome.css'
// import urlConfig from '../../urlConfig.js'

function Welcome() {
  return (
    <div className="container welcome">
      <div className="row">
        <div className="col text-center">
          <h1 className="header-text">Native American Curriculum for California</h1>
          <p className="welcome-text">The State of California has designated fourth grade as the grade to study Native American history. Whether you are the parent or teacher of a student in fourth grade, Lands of Our Ancestors can be an excellent supplement to your history teaching. Our tribally endorsed Native American curriculum is the perfect way to teach your fourth grader about nationally important topics.
          <br/></p>
          <p className="welcome-text title"><strong>For Parents</strong></p>
          <p className="welcome-text">Whether your child is enrolled in homeschool, a charter school, or a traditional public school, they can benefit from the perspective that the Lands of Our Ancestors curriculum offers. Give them a less biased view into our country's history that covers everything a fourth grader learning about Native Americans needs to know.</p>
          <p className="welcome-text title"><strong>For Teachers</strong></p>
          <p className="welcome-text">Our Native American curriculum not only meets the California state history and social science standards, but it also provides a different perspective than most history books. The curriculum was developed by teachers and designed to include everything students and educators need to succeed, including historical overviews, images, vocabulary words, chapter questions, and student projects.</p>
          <p className="welcome-text title"><strong>For Both</strong></p>
          <p className="welcome-text">These books use a set of Native characters to tell the stories of the Native peoples of our land, keeping your child engaged and helping them want to learn more. You can then supplement their learning with visits to different areas of the state depending on which book they're reading at the time.</p>
          <p className="welcome-text">The first book covers the Spanish Mission Era; Book 2 the Mexican Rancho Era, and the third the time period around the gold rush. Your fourth grader can learn what it was like to grow up during and live through these time periods while gaining empathy for the Native peoples and their struggles.</p>
          <p className="welcome-text">To learn more, check out our <a href="http://landsofourancestors.com/books">book descriptions</a>.</p>
          {/*<p className="welcome-text-2">Click on the button to get information about the three books in the series.</p>
          <Button href='/books' className="homepage-btn">Go To Books</Button>*/}
        </div>
      </div>
    </div>
  )
}

export default Welcome
