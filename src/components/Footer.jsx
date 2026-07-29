import React from 'react'
import {Link } from 'react-router-dom'
import logo from '../../public/palmlogo.jpg'
import { FaArrowAltCircleRight} from 'react-icons/fa'
export default function Footer() {
  return (
    <section  className='px-4 md:px-16 lg:px-24 xl:px-32 pt-3'>
      <div className='grid grid-cols-2'>
      <div className='flex flex-col capitalize gap-2'>
        <img src={logo} alt="hotel_logo" width={50} height={50} className='rounded-3xl' />
        <p>phone number :+93 22336657</p>
        <p>our hotel is for our customers at all times.</p>
      </div>
      <div className='capitalize flex flex-col gap-2  '>
        <h3 className='font-bold  '>quick Links</h3>
        <Link to='/hotels' className='hover:translate-x-2 duration-500 flex items-center gap-1'><FaArrowAltCircleRight/>Hotels</Link>
        <Link to='/about' className='hover:translate-x-2 duration-500 flex items-center gap-1'><FaArrowAltCircleRight></FaArrowAltCircleRight>about us</Link>
        <Link to='/policy' className='hover:translate-x-2 duration-500 flex items-center gap-1'><FaArrowAltCircleRight /> privacy policy</Link>
      </div>
      </div>

    </section>
  )
}
