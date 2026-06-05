import React from 'react'
import './styles/index.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Home from './components/Home'
import videos from './components/videos.js'
import Portfolio from './components/Portfolio.jsx'

const App = () => {
  return (
    <div className='h-screen w-full text-black bg-gray-50' >
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home videos={videos} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App