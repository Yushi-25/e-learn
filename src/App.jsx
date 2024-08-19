import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {
  const [showLogin, setShowLogin]= useState(false)
  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

