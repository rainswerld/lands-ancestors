import React from 'react'
import './Endorsements.css'
import endorsements from './EndorseObj.js'

function Endorsements() {
  const endorse = endorsements.endorsements
  return (
    <div className="container">
      <div className="row">
        <h1>{endorse.jessicaC.name}</h1>
        <p>{endorse.jessicaC.para}</p>
      </div>
      <div className="row">
        <h1>{endorse.roseB.name}</h1>
        <p>{endorse.roseB.para}</p>
      </div>
      <div className="row">
        <h1>{endorse.cindraW.name}</h1>
        <p>{endorse.cindraW.para}</p>
      </div>
      <div className="row">
        <h1>{endorse.dessaD.name}</h1>
        <p>{endorse.dessaD.para}</p>
      </div>
      <div className="row">
        <h1>{endorse.paulG.name}</h1>
        <p>{endorse.paulG.para}</p>
      </div>
      <div className="row">
        <h1>{endorse.careyMc.name}</h1>
        <p>{endorse.careyMc.para}</p>
        <p>{endorse.careyMc.para2}</p>
      </div>
      <div className="row">
        <h1>{endorse.marcusV.name}</h1>
        <p>{endorse.marcusV.para}</p>
        <p>{endorse.marcusV.para2}</p>
      </div>
    </div>
  )
}

export default Endorsements
