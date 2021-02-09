import React from 'react'
import './TrueHistory.css'
import TrueHistoryBanner from './TrueHistoryBanner.js'
import pdf from '../../assets/vimeo-graphics/HistoricRoad-LoRes.pdf'

function Contact() {
  return (
    <div className='center-text'>
    <TrueHistoryBanner />
      <div className="container">
        <div className="row vimeo-parent">
        <div className="col-md-3 col-sm-12">
          <a href="https://vimeo.com/248025380" target="_blank">
          <img
            src={require('../../assets/vimeo-graphics/TtTCA-Mission-Opening-black.jpg')}
            alt="mission opening"
            className="d-block w-100"
            /></a>
            <figcaption className="padding">Click Image to Watch Video</figcaption>
        </div>
        <figure className="col-md-3 col-sm-12 figure">
          <a href="https://vimeo.com/361500261" target="_blank">
          <img
            src={require('../../assets/vimeo-graphics/OtherSide-MainImage.jpg')}
            alt="the other side"
            className="d-block w-100"
            /></a>
            <figcaption className="padding">Click Image to Watch Video</figcaption>
        </figure>
          <figure className="col-md-3 col-sm-12 figure">
            <a href="https://vimeo.com/286700932" target="_blank">
            <img
              src={require('../../assets/vimeo-graphics/HearingHistoricalTrauma.png')}
              alt="hearing historical trauma"
              className="d-block w-100"
              /></a>
              <figcaption>Click Image to Watch Video</figcaption>
          </figure>
          <div className="col-md-3 col-sm-12">
          <a href={pdf}>
          <img
            src={require('../../assets/vimeo-graphics/HistoricRoadImage.jpg')}
            alt="mission opening"
            className="d-block w-100"
            /></a>
            <figcaption className="padding">Click Image to Download PDF</figcaption>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
