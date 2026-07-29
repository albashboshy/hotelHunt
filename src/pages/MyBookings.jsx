import React from 'react'
import { Link } from 'react-router-dom'
export default function MyBookings() {
    const tomorrow =Date.now()+86400000
    
  return (
    <section  className='pt-25 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className=' '>   
            <h3 className='text-3xl sm:text-1xl font-bold text-center'>My Bookings</h3> 
            <Link to='/'  className='btn bg-[#e89755] hover:bg-[#e89755] text-white mt-3 rounded-3xl p-1'>Home  </Link>
            <table className='min-w-full divide-y divide-gray-200 mt-3 '>  
                <thead className='bg-[#e89755]  '>
                    <tr>
                        <th className='text-[12px] py-2  text-left text-black uppercase '>Room</th>
                        <th className='text-[12px] py-2 text-left text-black uppercase '>Check In</th>
                        <th className='text-[12px] py-2 text-left text-black uppercase '>Check Out</th>
                        <th className='text-[12px] py-2  text-left text-black uppercase '>Status</th>
                        <th className='text-[12px] py-2 text-left text-black uppercase '>Price</th>  
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    <tr className=''>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>standard</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>{new Date().toDateString()}</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>{new Date
                            
                            (tomorrow).toDateString()}</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>Okay </td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>120 $</td>
                    </tr>
                    <tr>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>family suite</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>{new Date().toDateString()}</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>{new Date
                            
                            (tomorrow).toDateString()}</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>Okay </td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>220 $</td>
                        </tr>
                        <tr>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>standard</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>{new Date().toDateString()}</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>{new Date
                            
                            (tomorrow).toDateString()}</td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>Okay </td>
                        <td className=' text-sm text-gray-800 whitespace-nowrap'>120 $</td>
                        </tr>
                </tbody>

            </table>
        </div>
    </section>
  )
}
