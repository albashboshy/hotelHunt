import React from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'

export default function Sidebar() {
  const links = [
    { name: "dashboard", path: '/dashboard/Layout' },
    { name: "AddHotel", path: 'dasboard/addhotel' },
    { name: "HotelList", path: '/hotellist' },
  ]
  const locate= useLocation();
const isactive= ()=>{
    return locate.pathname
}
console.log(isactive())
  return (
    <section className="pt-25 px-4 md:px-16 lg:px-24 xl:px-32">
    
    <div className='w-16 md:w-65 border-r h-full text-base border-gray-300 pt-5 flex flex-col transition-all duration-500'>
      {links.map((link, i) => (
        <NavLink  key={i}
  to={link.path}
  className={({ isActive }) =>
    `px-4 py-2 ${isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-200"}`
  }
>
  {link.name}
</NavLink>
      ))}
    </div>
    </section >
  )
}