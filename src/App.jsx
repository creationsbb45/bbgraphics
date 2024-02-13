import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
// import AddProjects from './pages/AddProjects'
import Gallery from './pages/Gallery'
// import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/add-projects' element={<AddProjects />} /> */}
        <Route path='/wsp' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}
