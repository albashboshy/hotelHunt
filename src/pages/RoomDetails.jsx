
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom'
import rooms from '../Allrooms'
import { FaLocationArrow } from 'react-icons/fa';
import { embed, output } from 'framer-motion/client';
export default function RoomDetails() {
    
    const {id} = useParams();
 
  const room = rooms.find((item) => item.id === Number(id));
    console.log(room)
  

  return (
    <section className='pt-25 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='mt-3 '>
          {
            room ? (
                    
                        <div className='flex flex-col  '>
                            <h3 className='text-3xl sm:text-1xl font-bold text-center'>{room.hotelName}</h3>    
                            <div className='text-center mt-3 mb-2 font-bold'> 
                                    <h4>City :{room.city}</h4>
                                        <div className='flex felx-row justify-center items-center gap-2'> 
                                                  <p>
                                                    <FaLocationArrow  className='text-[#e89755]'/> 
                                                    </p> <p>{room.address}</p> 
                                                   </div>
                                </div>     
                                <img  className='rounded object-cover   ' src={room.image} alt='photo' />
                            <div className=" grid grid-cols-2 mt-4 ">
                                    <div className=' '> 
                                        <p className='font-bold'>Room Type </p>
                                        <p className='italic '>{room.roomType}</p>
                                    </div>
                                    <div> 
                                        <p className='font-bold'> Perice per Night</p>
                                        <p className='text-[#e89755]'>$ {room.pricePerNight}</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Amenities</p>
                                            <ul className='list-none '>
                                                {room.amenities.map((item)=>{
                                                   return  <li> * {item} </li>
                                                })}
                                            </ul>
                                    </div>
                                    <div> 
                                        <p className='font-bold'>Availbilty</p>
                                        <p className='text-[#e89755]'>{room.isAvailable ? "Available" : "Not Available"}</p>
                                    </div>
                                    </div>
                        </div>
            ):<div className='flex flex-row  justify-center items-center gap-2 font-bold capitalize '>

                <h2> the page is not found 404 </h2>
                <Link className='rounded bg-[#e89755] p-2 mt-2 ' to='/'>Home</Link>
                </div>
          }
        </div>
           {
            room?(
                     <div className='  mt-4 mx-auto'>
                <h2 className='font-bold mb-3 bg-[#e89755] py-2 rounded text-white text-center'>Location </h2>
                {/* location */}

                <iframe title='map' className='rounded '
                    src={`https://www.google.com/maps?q=${encodeURIComponent(room.address)}&output=embed`}
                    width={'100%'}
                    height={'350px'}
                >
                
                </iframe>
            </div>

            ):(
                <>
                    
                </>
            )
           }

    </section>
  )
}
