import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import '../styles/footer.css'

const quickLinks = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Residential Interiors',
  'Commercial Design',
  'Hospitality Spaces',
  'Custom Furniture',
  'Space Planning',
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__watermark' aria-hidden='true'>NEXA</div>

      <div className='footer__main'>
        <div>
          <p className='footer__brand-name'>NEXA</p>
          <p className='footer__brand-desc'>
            We create thoughtful interiors and architectural experiences that
            elevate the way people live, work, and connect.
          </p>
        </div>

        <div>
          <h3 className='footer__col-heading'>Quick Links</h3>
          <ul className='footer__links'>
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className='footer__link'>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='footer__col-heading'>Services</h3>
          <ul className='footer__links'>
            {serviceLinks.map((service) => (
              <li key={service}>
                <Link to='/services' className='footer__link'>{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='footer__col-heading'>Contact</h3>
          <div className='footer__contact-list'>

            <div className='footer__contact-item'>
              <div className='footer__contact-icon'>
                <Mail size={16} strokeWidth={1.75} />
              </div>
              <div>
                <p className='footer__contact-label'>Email</p>
                <a href='mailto:hello@nexainteriors.com' className='footer__contact-value'>
                  hello@nexainteriors.com
                </a>
              </div>
            </div>

            <div className='footer__contact-item'>
              <div className='footer__contact-icon'>
                <Phone size={16} strokeWidth={1.75} />
              </div>
              <div>
                <p className='footer__contact-label'>Phone</p>
                <a href='tel:+911234512345' className='footer__contact-value'>
                  +91 12345 12345
                </a>
              </div>
            </div>

            <div className='footer__contact-item'>
              <div className='footer__contact-icon'>
                <MapPin size={16} strokeWidth={1.75} />
              </div>
              <div>
                <p className='footer__contact-label'>Studio</p>
                <p className='footer__contact-value'>
                  42, Design District, Mumbai, MH 400001
                </p>
              </div>
            </div>

          </div>

          <div className='footer__social'>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='footer__social-link' aria-label='Instagram'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                <circle cx='12' cy='12' r='5' />
                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
              </svg>
            </a>
            <a href='https://pinterest.com' target='_blank' rel='noopener noreferrer' className='footer__social-link' aria-label='Pinterest'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='12' y1='17' x2='12' y2='22' />
                <path d='M5 12V9a7 7 0 0 1 14 0v3a5 5 0 0 1-10 0V9a3 3 0 0 1 6 0v3' />
              </svg>
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='footer__social-link' aria-label='LinkedIn'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect x='2' y='9' width='4' height='12' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='footer__social-link' aria-label='Facebook'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='footer__bottom'>
        <p className='footer__copyright'>
          &copy; 2026 NEXA Interiors. All Rights Reserved.
        </p>
        <div className='footer__bottom-links'>
          <a href='#' className='footer__bottom-link'>Privacy Policy</a>
          <a href='#' className='footer__bottom-link'>Terms &amp; Conditions</a>
        </div>
        <p className='footer__tagline' style={{ color: '#b87333' }}>
          Designed with Purpose By <span style={{ fontWeight: 600, letterSpacing: '0.05rem' }}>Naitik Patel</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
