import React from 'react'
import Navbar from './Navbar'
import '../styles/contact.css'
import contactBg from '../assets/images/contact/contact.jpg'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div
      className='min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex'
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10 pointer-events-none' />

      <Navbar light />

      <div className='relative z-10 w-[60%] flex flex-col justify-end pb-20 px-12 lg:px-20'>
        <span
          className='block text-xs font-semibold tracking-[0.28em] uppercase mb-5'
          style={{ color: '#d4966a' }}
        >
          Get In Touch
        </span>

        <h1
          className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white'
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
        >
          Every great space <br />begins with a conversation.
        </h1>

        <p
          className='mt-5 text-base leading-relaxed max-w-md'
          style={{ color: 'rgba(232,197,160,0.8)' }}
        >
          Share your vision with us and let's craft an interior that tells your story.
        </p>
      </div>

      <div className='relative z-10 w-[40%] text-white min-h-screen flex flex-col justify-center px-10 lg:px-14 bg-white/10 backdrop-blur-xl border-l border-white/10'>

        <p
          className='text-xs font-semibold tracking-[0.22em] uppercase mb-8'
        >
          Contact Details
        </p>

        <div className='flex flex-col gap-8'>

          <div className='flex items-center gap-4'>
            <div
              className='icon-btn-container flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0'
            >
              <Phone size={20} className="icon-btn" />
            </div>
            <div>
              <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(244, 213, 170, 0.84)' }}>
                Phone
              </p>
              <p className='text-white font-medium text-base'>+91 12345 12345</p>
              <p className='text-[13px] mt-0.5' style={{ color:  'rgba(255, 255, 255, 0.83)' }}>Mon – Sat, 9 AM – 7 PM</p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

          <div className='flex items-center gap-4'>
            <div
              className='icon-btn-container flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0'
            >
              <Mail size={20} className="icon-btn" />
            </div>
            <div>
              <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(244, 213, 170, 0.84)' }}>
                Email
              </p>
              <p className='text-white font-medium text-base'>hello@nexainteriors.com</p>
              <p className='text-[13px] mt-0.5' style={{ color: 'rgba(255, 255, 255, 0.83)' }}>We reply within 24 hours</p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

          <div className='flex items-center gap-4'>
            <div
              className='icon-btn-container flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0'
            >
              <MapPin size={20} className="icon-btn" />
            </div>
            <div>
              <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(244, 213, 170, 0.84)' }}>
                Office
              </p>
              <p className='text-white font-medium text-base'>42, Design District</p>
              <p className='text-[13px] mt-0.5' style={{ color:  'rgba(255, 255, 255, 0.83)' }}>Mumbai, MH 400001</p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

          <div className='flex items-center gap-4'>
            <div
              className='icon-btn-container flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0'
            >
              <Clock size={20} className="icon-btn" />
            </div>
            <div>
              <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(244, 213, 170, 0.84)' }}>
                Working Hours
              </p>
              <p className='text-white font-medium text-base'>Mon – Fri: 9 AM – 7 PM</p>
              <p className='text-[13px] mt-0.5' style={{ color:  'rgba(255, 255, 255, 0.83)' }}>Saturday: 10 AM – 5 PM</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact