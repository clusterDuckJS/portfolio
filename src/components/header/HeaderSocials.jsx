import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillDribbbleSquare} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="www.google.com" target='_blank'><AiFillLinkedin /></a>
        <a href="www.google.com" target='_blank'><AiFillGithub /></a>
        <a href="www.google.com" target='_blank'><AiFillDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials