import React, { useRef } from 'react'
import '../styles/home.css'
import '../styles/index.css'
import Navbar from './Navbar'
import homeMain from '../assets/images/home/homeMain.jpg'
import { Astroid } from 'lucide-react'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate()
  const portfolioRef = useRef(null)

  const handleExploreClick = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGetInTouchClick = () => {
    navigate('/contact')
  }

  return (
    <div className='w-full bg-gray-50 overflow-x-hidden'>
      <Navbar />

      <section className='hero-section'>
        <div className='hero-image-col'>
          <img
            src={homeMain}
            alt="Interior design showcase"
            className='object-cover object-[50%_80%] h-full w-full'
          />
        </div>

        <div className='hero-content-col'>
          <div className='hero-text-block'>
            <h1 className='hero-text font-semibold'>
              <span className='font-normal'>Crafting </span>experiences
            </h1>
            <p className='hero-description'>
              We <span className='font-bold'>transform</span> ordinary spaces into meaningful
              experiences, blending creativity, functionality, and timeless elegance to reflect
              your unique <span className='italic'>lifestyle</span>.
            </p>
            <p className='hero-tag'>
              Your Space, Reimagined. <br />Your Vision, Realized.
            </p>
          </div>

          <div className='hero-bottom'>
            <div className='hero-actions'>
              <button className='hero-button' onClick={handleExploreClick}>
                Explore
              </button>
              <Astroid size={20} color="#683818" strokeWidth={2} />
              <button className='hero-button' onClick={handleGetInTouchClick}>
                Get in Touch
              </button>
            </div>
            <div className='hero-corner'>
              <hr className='hero-corner__h' />
              <hr className='hero-corner__v' />
            </div>
          </div>
        </div>
      </section>

      <div ref={portfolioRef} className='portfolio-section'>
        <div className='portfolio-label'>
          <span className='portfolio-label__eyebrow'>Our Work</span>
          <h2 className='portfolio-label__heading'>Featured Projects</h2>
        </div>
        <Portfolio videos={props.videos} />
      </div>

      <Footer />
    </div>
  )
}

export default Home