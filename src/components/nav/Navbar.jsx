import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import './navbar.css'

function Navbar() {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><AiOutlineBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navbar