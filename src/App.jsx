import React from 'react'
import './styles/index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Home from './components/Home'
import videos from './components/videos.js'
import Portfolio from './components/Portfolio.jsx'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

const App = () => {
  const location = useLocation()

  return (
    <div className='min-h-screen w-full text-black bg-gray-50'>
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PageTransition><Landing /></PageTransition>} />
          <Route path='/home' element={<PageTransition><Home videos={videos} /></PageTransition>} />
          <Route path='/portfolio' element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path='/about' element={<PageTransition><About /></PageTransition>} />
          <Route path='/services' element={<PageTransition><Services /></PageTransition>} />
          <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
          <Route path='*' element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App