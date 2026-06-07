import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Landing.css'
import '../styles/index.css'

import cardB from '../assets/images/card-background.jpg'
import tile5 from '../assets/images/tile5.jpg'
import tile6 from '../assets/images/tile6.jpg'
import tile8 from '../assets/images/tile8.jpg'
import tile9 from '../assets/images/tile9.jpg'
import tile10 from '../assets/images/tile10.jpg'
import tile11 from '../assets/images/tile11.jpg'
import tile12 from '../assets/images/tile12.jpg'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-50 overflow-hidden'>
      <div className='grid_container h-[95%] w-[98%]'>

        <div
          className='card'
          id='home'
          style={{ gridArea: 'box1', backgroundImage: `url(${tile5})` }}
          onClick={() => navigate('/home')}
        >
          <p>home</p>
        </div>

        <div
          className='landing-decor'
          style={{ gridArea: 'box2', backgroundImage: `url(${tile12})`, backgroundPosition: '40% 65%' }}
        />

        <div
          className='card'
          id='services'
          style={{ gridArea: 'box3', backgroundImage: `url(${cardB})`, backgroundPosition: '50% 40%' }}
          onClick={() => navigate('/services')}
        >
          <p>services</p>
        </div>

        <div
          className='landing-decor'
          style={{ gridArea: 'box4', backgroundImage: `url(${tile10})`, backgroundPosition: '40% 60%' }}
        />

        <div
          className='landing-decor'
          style={{ gridArea: 'box5', backgroundImage: `url(${tile11})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        />

        <div
          className='card'
          id='about'
          style={{ gridArea: 'box6', backgroundImage: `url(${tile8})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
          onClick={() => navigate('/about')}
        >
          <p>about</p>
        </div>

        <div
          className='landing-decor'
          style={{ gridArea: 'box7', backgroundImage: `url(${tile9})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        />

        <div
          className='card'
          id='contact'
          style={{ gridArea: 'box8', backgroundImage: `url(${tile6})`, backgroundPosition: '50% 80%' }}
          onClick={() => navigate('/contact')}
        >
          <p>contact us</p>
        </div>

      </div>
    </div>
  )
}

export default Landing
