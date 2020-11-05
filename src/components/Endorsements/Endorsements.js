import React from 'react'
import './Endorsements.css'
import endorsements from './EndorseObj.js'
import { Jumbotron, Container } from 'react-bootstrap'

function Endorsements() {
  const endorse = endorsements.endorsements
  const jumboColors = {
    backgroundColor: 'rgb(112, 121, 113, 1)'
  }

  return (
    <div className="bg-colors">
    <Jumbotron style={jumboColors} fluid>
      <Container>
        <h4 className="chumash">{endorse.chumash.para}</h4>
      </Container>
    </Jumbotron>
    <Container>
      <h1 className="endorse-header">Endorsements</h1>
      </Container>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.shelleyA.big}</h5>
          <p>{endorse.shelleyA.para}</p>
          <h5 className="text-right">-- {endorse.shelleyA.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.jessicaC.big}</h5>
          <p>{endorse.jessicaC.para}</p>
          <h5 className="text-right">-- {endorse.jessicaC.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.roseB.big}</h5>
          <p>{endorse.roseB.para}</p>
          <h5 className="text-right">-- {endorse.roseB.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.cindraW.big}</h5>
          <p>{endorse.cindraW.para}</p>
          <h5 className="text-right">-- {endorse.cindraW.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.dessaD.big}</h5>
          <p>{endorse.dessaD.para}</p>
          <h5 className="text-right">-- {endorse.dessaD.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.paulG.big}</h5>
          <p>{endorse.paulG.para}</p>
          <h5 className="text-right">-- {endorse.paulG.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.careyMc.big}</h5>
          <p>{endorse.careyMc.para}</p>
          <p>{endorse.careyMc.para2}</p>
          <h5 className="text-right">-- {endorse.careyMc.name}</h5>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumboColors} fluid>
        <Container className="shadow-box">
          <h5 className="big">{endorse.marcusV.big}</h5>
          <p>{endorse.marcusV.para}</p>
          <p>{endorse.marcusV.para2}</p>
          <h5 className="text-right">-- {endorse.marcusV.name}</h5>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Endorsements
