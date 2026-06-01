import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <div className='container h-screen w-full bg-gray-800 text-white' >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App