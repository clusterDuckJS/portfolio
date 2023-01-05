import React from 'react'
import CTA from './CTA'
import ME from '../../assets/avatar1.jpeg'
import HeaderSocials from './HeaderSocials'
import './header.css'


function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Adarsh S</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="profile" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header