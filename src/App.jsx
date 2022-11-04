import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Blog from './pages/Blog'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
