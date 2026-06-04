import React from 'react'
import Navbar from './Navbar'
import contactBg from '../assets/images/contact/contact.jpg'

const Contact = () => {
  return (
    <div className='min-h-screen w-full bg-cover bg-center bg-no-repeat relative' style={{backgroundImage:`url(${contactBg})`}}>
      <Navbar />
      <div className='absolute '>

      </div>
    </div>
  )
}

export default Contact