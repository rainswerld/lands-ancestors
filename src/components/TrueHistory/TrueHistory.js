import React from 'react'
import './TrueHistory.css'
import TrueHistoryBanner from './TrueHistoryBanner.js'

function Contact() {
  return (
    <div className='center-text'>
    <TrueHistoryBanner />
      <div className="container">
        <div className="row vimeo-parent">
          <div className="col-md-3 col-sm-12">
            <a href="https://vimeo.com/286700932" target="_blank">
            <img
              src={require('../../assets/vimeo-graphics/HearingHistoricalTrauma.png')}
              alt="hearing historical trauma"
              className="d-block w-100"
              /></a>
          </div>
          <div className="col-md-3 col-sm-12">
            <a href="https://vimeo.com/361500261" target="_blank">
            <img
              src={require('../../assets/vimeo-graphics/OtherSide-MainImage.jpg')}
              alt="the other side"
              className="d-block w-100"
              /></a>
          </div>
          <div className="col-md-3 col-sm-12">
            <a href="https://vimeo.com/248025380" target="_blank">
            <img
              src={require('../../assets/vimeo-graphics/TtTCA-Mission-Opening-black.jpg')}
              alt="mission opening"
              className="d-block w-100"
              /></a>
          </div>
          <div className="col-md-3 col-sm-12">
            <p>Historic Road</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Contact