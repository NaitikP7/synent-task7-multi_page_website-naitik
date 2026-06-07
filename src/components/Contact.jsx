import React from 'react'
import Navbar from './Navbar'
import '../styles/contact.css'
import contactBg from '../assets/images/contact/contact.jpg'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='contact-page'>
      <div
        className='contact-hero'
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className='contact-overlay' />

        <Navbar light />

        <div className='contact-left'>
          <span className='contact-eyebrow'>Get In Touch</span>
          <h1 className='contact-heading'>
            Every great space <br />begins with a conversation.
          </h1>
          <p className='contact-subtext'>
            Share your vision with us and let's craft an interior that tells your story.
          </p>
        </div>

        <div className='contact-right'>
          <p className='contact-panel-label'>Contact Details</p>

          <div className='contact-details'>
            <div className='contact-detail-row'>
              <div className='icon-btn-container'>
                <Phone size={20} className='icon-btn' />
              </div>
              <div>
                <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(250, 231, 204, 0.84)' }}>
                  Phone
                </p>
                <p className='text-white font-medium text-base'>+91 12345 12345</p>
                <p className='text-[13px] mt-0.5' style={{ color: 'rgba(255, 255, 255, 0.83)' }}>Mon – Sat, 9 AM – 7 PM</p>
              </div>
            </div>

            <div className='contact-divider' />

            <div className='contact-detail-row'>
              <div className='icon-btn-container'>
                <Mail size={20} className='icon-btn' />
              </div>
              <div>
                <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(250, 231, 204, 0.84)' }}>
                  Email
                </p>
                <p className='text-white font-medium text-base'>hello@nexainteriors.com</p>
                <p className='text-[13px] mt-0.5' style={{ color: 'rgba(255, 255, 255, 0.83)' }}>We reply within 24 hours</p>
              </div>
            </div>

            <div className='contact-divider' />

            <div className='contact-detail-row'>
              <div className='icon-btn-container'>
                <MapPin size={20} className='icon-btn' />
              </div>
              <div>
                <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(250, 231, 204, 0.84)' }}>
                  Office
                </p>
                <p className='text-white font-medium text-base'>42, Design District</p>
                <p className='text-[13px] mt-0.5' style={{ color: 'rgba(255, 255, 255, 0.83)' }}>Mumbai, MH 400001</p>
              </div>
            </div>

            <div className='contact-divider' />

            <div className='contact-detail-row'>
              <div className='icon-btn-container'>
                <Clock size={20} className='icon-btn' />
              </div>
              <div>
                <p className='text-xs font-semibold tracking-widest uppercase mb-1' style={{ color: 'rgba(250, 231, 204, 0.84)' }}>
                  Working Hours
                </p>
                <p className='text-white font-medium text-base'>Mon – Fri: 9 AM – 7 PM</p>
                <p className='text-[13px] mt-0.5' style={{ color: 'rgba(255, 255, 255, 0.83)' }}>Saturday: 10 AM – 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact