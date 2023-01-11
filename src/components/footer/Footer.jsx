import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
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
        <a href="https://www.facebook.com/profile.php?id=100088700151977" target='_blank' rel='noreferrer'><AiFillFacebook/></a>
        <a href="https://www.instagram.com/clusterduckjs/" target='_blank' rel='noreferrer'><AiFillInstagram/></a>
        <a href="https://github.com/clusterDuckJS" target='_blank' rel='noreferrer'><AiFillGithub/></a>
        <a href="https://wa.me/+917907969115" target='_blank' rel='noreferrer'><AiOutlineWhatsApp/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;2022 @clusterDuckJS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer