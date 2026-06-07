import React from 'react'
import Navbar from './Navbar'
import '../styles/about.css'
import Footer from './Footer'
import tile8 from '../assets/images/tile8.jpg'

const features = [
  {
    num: '01',
    title: 'Client-Centered Approach',
    text: 'Every project is tailored to your lifestyle, vision, and unique requirements.',
  },
  {
    num: '02',
    title: 'Attention to Detail',
    text: 'Thoughtfully crafted interiors where every element serves a purpose.',
  },
  {
    num: '03',
    title: 'Innovative Solutions',
    text: 'Creative design strategies that maximize beauty, comfort, and functionality.',
  },
  {
    num: '04',
    title: 'Quality Commitment',
    text: 'Premium materials, trusted craftsmanship, and lasting results.',
  },
]

const About = () => {
  return (
    <div className='min-h-screen w-full bg-gray-50 overflow-x-hidden'>
      <Navbar />
      <div className='about-section w-full'>

        <div className='about-box1'>
          <img
            src={tile8}
            alt='Interior design showcase'
            className='absolute inset-0 w-full h-full object-cover object-[50%_40%]'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#f4ede6]/90 via-[#f4ede6]/40 to-transparent' />
          <div className='about-story-card'>
            <div className='about-box1__content'>
              <span
                className='block text-xs font-semibold tracking-[0.25em] uppercase mb-4'
                style={{ color: '#b87333' }}
              >
                Our Story
              </span>
              <p>
                We are a team of passionate designers and architects dedicated to
                transforming ordinary spaces into extraordinary experiences. With
                a commitment to excellence that spans over a decade, we bring
                together artistic vision and practical expertise to craft interiors
                that speak to your unique identity.
              </p>
              <p className='mt-4'>
                Every project begins with listening — understanding not just your
                preferences, but your lifestyle, aspirations, and the subtle ways
                a space can enhance your everyday moments.
              </p>
            </div>
          </div>
        </div>

        <div className='about-box2'>
          <h1
            className='about-heading font-semibold'
            style={{
              background: 'linear-gradient(135deg, #b87333, #5a3520)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            About Us
          </h1>
        </div>

        <div style={{ gridArea: 'box3' }} className='wcu'>
          <div className='wcu__header'>
            <span className='wcu__label'>Why Choose Us</span>
            <h2 className='wcu__heading'>Design Excellence in Every Detail</h2>
            <p className='wcu__subtext'>
              We blend artistic vision with meticulous execution to create spaces
              that are as functional as they are beautiful — spaces that stand the
              test of time.
            </p>
          </div>

          <div className='wcu__grid'>
            {features.map(({ num, title, text }) => (
              <div className='wcu__card' key={num}>
                <span className='wcu__number'>{num}</span>
                <div className='wcu__divider' />
                <h3 className='wcu__title'>{title}</h3>
                <p className='wcu__text'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About