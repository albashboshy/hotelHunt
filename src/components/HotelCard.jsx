import React from 'react'
import hotel_11 from '../../public/hotel_11.jpg'
import hotel_12 from '../../public/hotel_12.jpg'
import hotel_13 from '../../public/hotel_13.jpg'
import hotel_14 from '../../public/hotel_14.jpg'
import hotel_15 from '../../public/hotel_15.jpg'
import hotel_16 from '../../public/hotel_16.jpg'
import hotel_17 from '../../public/hotel_17.jpg'
import hotel_18 from '../../public/hotel_18.jpg'
export default function HotelCard() {
    const hotels = [
  {
    name: "Grand Palace Hotel",
    rating: 4.8,
    price: 220,
    location: "Dubai, UAE",
    image: hotel_11
  },
  {
    name: "Ocean View Resort",
    rating: 4.5,
    price: 180,
    location: "Miami, USA",
    image: hotel_12
  },
  {
    name: "Royal Garden Inn",
    rating: 4.2,
    price: 140,
    location: "London, UK",
    image: hotel_13
  },
  {
    name: "Skyline Suites",
    rating: 4.7,
    price: 200,
    location: "New York, USA",
    image: hotel_14
  },
  {
    name: "Sunset Paradise Hotel",
    rating: 4.3,
    price: 160,
    location: "Bali, Indonesia",
    image: hotel_15
  },
  {
    name: "Mountain Escape Lodge",
    rating: 4.6,
    price: 170,
    location: "Swiss Alps, Switzerland",
    image: hotel_16
  },
  {
    name: "City Lights Hotel",
    rating: 4.1,
    price: 130,
    location: "Paris, France",
    image: hotel_17
  },
  {
    name: "Desert Oasis Resort",
    rating: 4.4,
    price: 150,
    location: "Riyadh, Saudi Arabia",
    image:hotel_18
  }
];
  return (
    <div className='bg-gray-300 py-4 px-2'>
        <h2 className='text-center font-bold text-4xl capitalize '> featured hotels</h2>
        <h3 className='text-center text-1xl mt-3 capitalize'>Check out our top-rated hotels</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded mt-4'>
            {
                hotels.map((hotel, index) => (
                  
                    <div className='bg-white rounded overflow-hidden' key={index}> 
                        <img src={hotel.image} alt={hotel.name} className='w-full h-48 object-cover' />
                       <div className='p-4 not-first:italic'>
                         <h3 className='font-bold not-italic'>{hotel.name}</h3>
                        <p >Rating: {hotel.rating}</p>
                        <p>Price: ${hotel.price}</p>
                        <p>Location: {hotel.location}</p>
                        </div>
                        <button className='mx-2 my-2'>Book Now</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
