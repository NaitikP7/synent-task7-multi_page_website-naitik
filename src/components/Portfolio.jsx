import React from 'react'
import Card from './Card'
import '../styles/portfolio.css'
const Portfolio = (props) => {
  return (
    <div className='h-screen w-full flex p-0 justify-center items-center relative bg-gradient-to-b from-gray-50 to-[#edd3bb] '>
      <div id='right' className='min-w-auto rounded-2xl max-w-[75%] flex gap-20 flex-nowrap overflow-x-auto h-[82%] p-2 absolute top-[14%] '>
        {props.videos.map((video) => {
          return <Card key={video.id} video={video} />
        })}


      </div>
    </div>
  )
}

export default Portfolio