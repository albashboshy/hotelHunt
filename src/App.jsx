import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route,useLocation, createHashRouter } from 'react-router-dom'
import HeroSection from './components/Hero';
import Home from './pages/Home';
import AllHotels from './pages/AllHotels';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import Layout from  './pages/dashboard/layout'
import About from './pages/About'
function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');


  return (
    <div className=''>
      { !isDashboard && <Navbar /> }
      
        <Routes>
    
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<AllHotels />} />
          <Route path='/room/:id' element={<RoomDetails/>} />
          <Route path='/mybooking' element={<MyBookings />} />
          <Route path='/dashboard' element={<MyBookings/>} />
          <Route path='/About' element={<About />} />
        </Routes>

      </div>
  
  )
}

export default App