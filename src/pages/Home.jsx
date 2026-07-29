import React from 'react'
import HeroSection from '../components/Hero'
import HotelCard from '../components/HotelCard'
import Offers from '../components/Offers'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div >
      <HeroSection />

      <HotelCard />
      <Offers />
      <Testmonials />
      <Footer />
    </div>
  )
}
