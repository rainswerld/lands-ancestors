import React from 'react'
import './Endorsements.css'
import endorsements from './EndorseObj.js'
import { Jumbotron, Container } from 'react-bootstrap'

function Endorsements() {
  const endorse = endorsements.endorsements
  const jumboBg = {
    backgroundColor: 'rgba(255, 237, 196, .4)',
    margin: '0'
  }
  return (
    <div>
      <Jumbotron fluid style={jumboBg}>
        <Container>
          <p>{endorse.jessicaC.para}</p>
          <h5 className="text-right">-- {endorse.jessicaC.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={jumboBg}>
        <Container>
          <p>{endorse.roseB.para}</p>
          <h5 className="text-right">-- {endorse.roseB.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={jumboBg}>
        <Container>
          <p>{endorse.cindraW.para}</p>
          <h5 className="text-right">-- {endorse.cindraW.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={jumboBg}>
        <Container>
          <p>{endorse.dessaD.para}</p>
          <h5 className="text-right">-- {endorse.dessaD.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={jumboBg}>
        <Container>
            <p>{endorse.paulG.para}</p>
            <h5 className="text-right">-- {endorse.paulG.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={jumboBg}>
        <Container>
          <p>{endorse.careyMc.para}</p>
          <p>{endorse.careyMc.para2}</p>
          <h5 className="text-right">-- {endorse.careyMc.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={jumboBg}>
        <Container>
          <p>{endorse.marcusV.para}</p>
          <p>{endorse.marcusV.para2}</p>
          <h5 className="text-right">-- {endorse.marcusV.name}</h5>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Endorsements
