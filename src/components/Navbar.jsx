  import React, { useState, useEffect } from 'react'
  import { Link, useLocation } from 'react-router-dom'
  import logo from '../assets/images/logo.png'
  import '../styles/navbar.css'

  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const Navbar = ({ light = false }) => {
    const { pathname } = useLocation()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    /* ── scroll listener ─────────────────────────────── */
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20)
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* close mobile menu on route change */
    useEffect(() => {
      setMobileOpen(false)
    }, [pathname])

    return (
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${light ? 'navbar--light' : ''}`}>
        <div className="navbar__inner">
          {/* ── Logo ──────────────────────────────────── */}
          <Link to="/" className="navbar__logo" aria-label="Home">  
            <span className="navbar__logo-text">NEXA</span>
          </Link>

          {/* ── Desktop Links ─────────────────────────── */}
          <ul className="navbar__links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`navbar__link ${pathname === to ? 'navbar__link--active' : ''}`}
                >
                  {label}
                  <span className="navbar__link-bar" />
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA Button (desktop) ──────────────────── */}
          <Link to="/contact" className="navbar__cta">
            Get in Touch
          </Link>

          {/* ── Mobile Hamburger ──────────────────────── */}
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ── Mobile Drawer ────────────────────────────── */}
        <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`navbar__mobile-link ${pathname === to ? 'navbar__mobile-link--active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="navbar__mobile-cta">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  export default Navbar
