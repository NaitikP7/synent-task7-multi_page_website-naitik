import React from 'react'
import Card from './Card'
import '../styles/portfolio.css'

const Portfolio = (props) => {
  return (
    <div className='portfolio-cards-wrapper'>
      <div id='right' className='portfolio-cards-scroll'>
        {props.videos.map((video) => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio