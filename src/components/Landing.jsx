import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/landing.css'
import '../styles/index.css'
import cardB from '../assets/images/card-background.jpg'
import tile5 from '../assets/images/tile5.jpg'
import tile6 from '../assets/images/tile6.jpg'
import tile4 from '../assets/images/tile4.jpg'
import tile7 from '../assets/images/tile7.jpg'
import tile8 from '../assets/images/tile8.jpg'
import tile9 from '../assets/images/tile9.jpg'
import tile10 from '../assets/images/tile10.jpg'
import tile11 from '../assets/images/tile11.jpg'
import tile12 from '../assets/images/tile12.jpg'

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-50'>
        <div className='grid_container h-[95%] w-[98%]'>
            <div className='card' id='home' style={{gridArea: "box1", backgroundImage: `url(${tile5})`}} onClick={() => navigate('/home')}>
                <p>home</p>
            </div>
            <div className='bg-[40%_65%]' style={{gridArea: "box2", backgroundImage: `url(${tile12})`}}></div>
            <div className='card bg-[50%_40%]' id='services' style={{gridArea: "box3", backgroundImage: `url(${cardB})`}} onClick={() => navigate('/services')}>
                <p>services</p>
            </div>
            <div className='bg-cover bg-[40%_60%]' style={{gridArea: "box4",backgroundImage: `url(${tile10})`}}></div>
            <div className='bg-center bg-cover' style={{gridArea: "box5",backgroundImage: `url(${tile11})`}}></div>
            <div className='card bg-[50%_55%]' id='about' style={{gridArea: "box6", backgroundImage: `url(${tile8})`}} onClick={() => navigate('/about')}>
                <p>about</p>
            </div>
            <div className='bg-cover' style={{gridArea: "box7",backgroundImage: `url(${tile9})`}}></div>
            <div className='card bg-[50%_80%]' id='contact' style={{gridArea: "box8", backgroundImage: `url(${tile6})`}} onClick={() => navigate('/contact')}>
                <p>contact us</p>
            </div>
        </div>
    </div>
  )
}

export default Home
