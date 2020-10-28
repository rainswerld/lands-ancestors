import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookCard from './components/Cards/CardsUI.js'
import Welcome from './components/Welcome/Welcome.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer'
import Endorsements from './components/Endorsements/Endorsements.js'
import StudentRes from './components/Students/StudentRes.js'
import Contact from './components/Contact/Contact.js'

function App() {
  return (
    <Router className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => (
          <Fragment>
            <Banner />
            <Welcome />
            <BookCard className="books"/>
          </Fragment>
        )}/>
        <Route exact path='/endorsements' render={() => (
            <Endorsements />
        )}/>
        <Route exact path='/students' render={() => (
            <StudentRes />
        )}/>
        <Route exact path='/contact' render={() => (
            <Contact />
        )}/>
      </Switch>
      <Footer className="footer"/>
    </Router>
  );
}

export default App;
