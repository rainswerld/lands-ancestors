import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookCard from './components/Cards/CardsUI.js'
import Welcome from './components/Welcome/Welcome.js'
import WelcomeBooks from './components/Welcome/WelcomeBooks.js'
import WelcomeTeachers from './components/Welcome/WelcomeTeachers.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer'
import Endorsements from './components/Endorsements/Endorsements.js'
import StudentRes from './components/Students/StudentRes.js'
import Contact from './components/Contact/Contact.js'
import TeacherGuides from './components/TeacherGuides/TeacherGuides.js'
import 'react-image-lightbox/style.css'
import urlConfig from './urlConfig.js'

function App() {
  return (
    <Router className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path={urlConfig + '/'} render={() => (
          <Fragment>
            <Banner />
            <Welcome />
          </Fragment>
        )}/>
        <Route exact path={urlConfig + '/books'} render={() => (
            <Fragment>
              <Banner />
              <WelcomeBooks />
              <BookCard className="books"/>
            </Fragment>
        )}/>
        <Route exact path={urlConfig + '/endorsements'} render={() => (
            <Endorsements />
        )}/>
        <Route exact path={urlConfig + '/students'} render={() => (
            <StudentRes />
        )}/>
        <Route exact path={urlConfig + '/contact'} render={() => (
            <Contact />
        )}/>
        <Route exact path={urlConfig + '/teacher-guides'} render={() => (
          <Fragment>
            <WelcomeTeachers />
            <TeacherGuides />
          </Fragment>
        )}/>
      </Switch>
      <Footer className="footer"/>
    </Router>
  );
}

export default App;
