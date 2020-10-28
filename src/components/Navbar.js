import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FcNightLandscape } from 'react-icons/fc'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            Lands Of Our Ancestors
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"><Link to='/' className="nav-links" onClick={closeMobileMenu}>HOME</Link></li>
            <li className="nav-item"><Link to='/endorsements' className="nav-links" onClick={closeMobileMenu}>ENDORSEMENTS</Link></li>
            <li className="nav-item"><Link to='/students' className="nav-links" onClick={closeMobileMenu}>STUDENT RESPONSES</Link></li>
            <li className="nav-item"><Link to='/contact' className="nav-links" onClick={closeMobileMenu}>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
