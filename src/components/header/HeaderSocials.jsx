import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import './header.css'

function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/adarsh-s-12285b261/" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
        <a href="https://github.com/clusterDuckJS" target='_blank' rel="noreferrer"><AiFillGithub /></a>
        <a href="https://www.facebook.com/profile.php?id=100088700151977" target='_blank' rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials