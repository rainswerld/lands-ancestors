import React from 'react'
import '../App.css'

function Banner() {
  return (
    <div className="container">
      <div className="row">
        <img className="col header-image" src={require('../assets/LOOA-Bookmark-Side1.jpg')} alt="Lands Of Our Ancestors Bookmark" />
      </div>
    </div>
  )
}

export default Banner
