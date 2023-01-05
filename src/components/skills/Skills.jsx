import React from 'react'
import {MdVerified} from 'react-icons/md'
import './skills.css'

function Skills() {
  return (
    <section id="skills">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>Googling</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* ======================BACKEND BEGINNING============== */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>Express</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill_details">
              <MdVerified className='skill_details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills