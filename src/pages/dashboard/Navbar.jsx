import React from 'react'
import {Link } from 'react-router-dom'
import logo from '../../../public/palmlogo.jpg'
import { UserButton } from '@clerk/clerk-react';
import Sidebar from './Sidebar';
export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    
React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <section className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/4 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-2 md:py-2"}`}>
            <Link to='/'>

        <img  src={logo}  width={50} height={50} className='rounded-3xl' alt='hotel_logo' />
        </Link>
        <UserButton ></UserButton>
      
    </section>
  )
}
