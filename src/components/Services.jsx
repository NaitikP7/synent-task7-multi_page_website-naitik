import React, { useState, useCallback, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import '../styles/services.css'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

/* ── Import project videos for cinematic backgrounds ──────── */
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import video4 from '../assets/videos/video4.mp4'
import video5 from '../assets/videos/video5.mp4'

/* ── Import project images for static fallbacks ───────────── */
import tile5 from '../assets/images/tile5.jpg'
import tile8 from '../assets/images/tile8.jpg'
import tile9 from '../assets/images/tile9.jpg'
import tile10 from '../assets/images/tile10.jpg'
import tile11 from '../assets/images/tile11.jpg'
import tile12 from '../assets/images/tile12.jpg'

/* ═══════════════════════════════════════════════════════════
   Service Data — Data-driven architecture
   ═══════════════════════════════════════════════════════════ */
const servicesData = [
  {
    id: 'residential',
    title: 'Residential Interiors',
    description:
      'Designing homes that reflect personality, comfort, and modern living. Every detail is thoughtfully curated to create spaces that feel welcoming, refined, and timeless.',
    video: video1,
    image: tile5,
  },
  {
    id: 'commercial',
    title: 'Commercial Design',
    description:
      'Creating workspaces that enhance productivity, collaboration, and brand identity while maintaining a strong visual presence.',
    video: video2,
    image: tile12,
  },
  {
    id: 'hospitality',
    title: 'Hospitality Spaces',
    description:
      'Crafting memorable guest experiences through elegant interiors, carefully selected materials, and immersive atmospheres.',
    video: video3,
    image: tile8,
  },
  {
    id: 'furniture',
    title: 'Custom Furniture',
    description:
      'Developing bespoke furniture solutions tailored specifically to each project, ensuring uniqueness and perfect integration.',
    video: video4,
    image: tile9,
  },
  {
    id: 'planning',
    title: 'Space Planning',
    description:
      'Optimizing layouts to improve flow, usability, and spatial harmony while maximizing the potential of every environment.',
    video: video5,
    image: tile10,
  },
  {
    id: 'turnkey',
    title: 'Turnkey Execution',
    description:
      'Managing projects from concept to completion with precision, transparency, and attention to detail, ensuring a seamless experience.',
    video: video1,
    image: tile11,
  },
]

const highlights = [
  'End-to-End Project Management',
  'Bespoke Design Solutions',
  'Premium Material Selection',
  'Architectural Visualization',
  'Interior Styling & Furnishing',
]

/* ═══════════════════════════════════════════════════════════
   Services Component
   ═══════════════════════════════════════════════════════════ */
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef(null)
  const navigate = useNavigate()

  const activeService = servicesData[activeIndex]

  /* Handle service switch with transition */
  const handleServiceChange = useCallback(
    (index) => {
      if (index === activeIndex || isTransitioning) return
      setIsTransitioning(true)

      /* Brief delay then switch */
      setTimeout(() => {
        setActiveIndex(index)
        setIsTransitioning(false)
      }, 150)
    },
    [activeIndex, isTransitioning]
  )

  /* Ensure video plays on service switch */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => { })
    }
  }, [activeIndex])

  return (
    <div className="services-page">
      <Navbar />

      {/* ── Main Split Layout ─────────────────────────── */}
      <div className="services-split">
        {/* ── Left Panel: Cinematic Visual ──────────── */}
        <div className="services-visual">
          <video
            ref={videoRef}
            key={activeService.id}
            className={`services-visual__media ${isTransitioning ? '' : 'services-visual__media--entering'
              }`}
            src={activeService.video}
            poster={activeService.image}
            autoPlay
            muted
            loop
            playsInline
            style={{ opacity: isTransitioning ? 0.3 : 1 }}
          />

          {/* Gradient overlay */}
          <div className="services-visual__overlay" />

          {/* Project label on visual */}
          <div className="services-visual__label">
            {String(activeIndex + 1).padStart(2, '0')} / {String(servicesData.length).padStart(2, '0')}
            <span>{activeService.title}</span>
          </div>
        </div>

        {/* ── Right Panel: Editorial Content ────────── */}
        <div className="services-content">
          {/* Small label */}
          <p className="services-label">Our Services</p>

          {/* Main headline */}
          <h1 className="services-headline">
            Crafting Spaces<br />
            That Inspire Connection
          </h1>

          {/* Description */}
          <p className="services-description">
            Every space tells a story. We design environments that bring
            together functionality, emotion, and timeless aesthetics. Our
            approach blends creativity, craftsmanship, and thoughtful planning
            to create interiors that feel meaningful and unforgettable.
          </p>

          {/* ── Service Navigation ─────────────────── */}
          <ul className="services-nav">
            {servicesData.map((service, index) => (
              <li
                key={service.id}
                className={`services-nav__item ${index === activeIndex ? 'services-nav__item--active' : ''
                  }`}
                onClick={() => handleServiceChange(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleServiceChange(index)
                  }
                }}
              >
                <span className="services-nav__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="services-nav__name">{service.title}</span>
                <span className="services-nav__dot" />
              </li>
            ))}
          </ul>

          {/* ── Active Service Detail ──────────────── */}
          <div className="services-detail" key={activeService.id}>
            <p className="services-detail__text">
              {activeService.description}
            </p>
          </div>

          {/* ── Highlights / Benefits ─────────────── */}
          <div className="services-highlights">
            {highlights.map((highlight) => (
              <span key={highlight} className="services-highlight-tag">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services