import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillDribbbleCircle} from 'react-icons/ai'
import './footer.css'

function Footer() {
  return (
    <footer>
      <a href="" className="footer_logo">clusterDuckJS</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="www.google.com"><AiFillFacebook/></a>
        <a href="www.google.com"><AiFillInstagram/></a>
        <a href="www.google.com"><AiFillGithub/></a>
        <a href="www.google.com"><AiFillDribbbleCircle/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;2022 @clusterDuckJS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer