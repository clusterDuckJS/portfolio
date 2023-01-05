import React from 'react'
import './about.css'
import AboutMe from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id="about">
       <h5>Get To Know Me</h5>
       <h2>About Me</h2>

       <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
                <img src={AboutMe} alt="about" />
            </div>
        </div>
        
        <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                    <FaAward className='about_icon' />
                    <h5>Experience</h5>
                    <small>3+ Years Working</small>
                </article>
                <article className="about_card">
                    <HiOutlineUsers className='about_icon' />
                    <h5>Clients</h5>
                    <small>3+ Years Working</small>
                </article>
                <article className="about_card">
                    <VscFolderLibrary className='about_icon' />
                    <h5>Projects</h5>
                    <small>3 Projects Completed</small>
                </article>
            </div>
                <p>
                As a self-taught ReactJS developer, I have developed strong skills in web app development and am passionate about creating intuitive user experiences for web projects. I have continued to invest my time to build an extensive knowledge of the ReactJS framework and can quickly adapt existing code for new projects. I strive to stay up to date with industry trends and best practices through continual research and am dedicated to ensuring my work is high quality, secure, and reliable. I believe my expertise makes me an asset to any development team, so I'm eager to explore new opportunities that would benefit from the knowledge I have acquired.
                </p>
                <a href="" className="btn btn-primary">Let's Talk</a>
        </div>
        
       </div>
    </section>
  )
}

export default About