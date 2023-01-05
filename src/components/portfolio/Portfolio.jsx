import React from 'react'
import data from '../../data.js'
import './portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map((item)=>{
          return(
            <article key={item.id} className="portfolio_item">
            
              <div className="portfolio_item-image">
                <img src={item.image} alt="project" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio_item-cta">
                <a href={item.github} className='btn'>Github</a>
                <a href={item.live} className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio