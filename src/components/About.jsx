import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className='min-h-screen w-full bg-gray-50'>
      <Navbar />
      <section className='pt-[84px] px-6 md:px-12 lg:px-20 pb-16'>
        <div className='max-w-[1280px] mx-auto'>
          <h1 className='text-4xl md:text-5xl font-semibold mb-4'
              style={{
                background: 'linear-gradient(135deg, #b87333, #5a3520)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}>
            About Us
          </h1>
          <p className='text-lg text-[#6b5c50] max-w-2xl leading-relaxed'>
            We are a team of passionate creators and innovators dedicated to
            delivering exceptional digital experiences.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About