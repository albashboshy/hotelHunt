import React from 'react'
import room_1 from '../../public/room_1.jpg'
import room_2 from '../../public/room_2.jpg'
import room_3 from '../../public/room_3.jpg'
import room_4 from '../../public/room_4.jpg'
import room_5 from '../../public/room_5.jpg'
import room_6 from '../../public/room_6.jpg'
export default function Offers() {
    const offers = [
  {
    id: 1,
    title: "Summer Special Deal",
    des: "Enjoy 20% off on all rooms during summer season.",
    priceoff: 20,
    expirdate: "2026-08-31",
    image: room_1
  },
  {
    id: 2,
    title: "Weekend Escape",
    des: "Book 2 nights and get 1 night free.",
    priceoff: 33,
    expirdate: "2026-09-15",
    image: room_2
  },
  {
    id: 3,
    title: "Early Bird Offer",
    des: "Get 15% discount when booking 30 days in advance.",
    priceoff: 15,
    expirdate: "2026-10-01",
    image: room_3
  },
  {
    id: 4,
    title: "Luxury Upgrade",
    des: "Free room upgrade for premium bookings.",
    priceoff: 25,
    expirdate: "2026-12-20",
    image: room_4
  },
  {
    id: 5,
    title: "Family Package",
    des: "Kids stay free + complimentary breakfast.",
    priceoff: 18,
    expirdate: "2026-11-10",
    image: room_5
  },
  {
    id: 6,
    title: "Holiday Discount",
    des: "Celebrate holidays with exclusive 30% discount.",
    priceoff: 30,
    expirdate: "2026-12-31",
    image: room_6
  }
];
  return (
    <div className='bg-gray-300 py-4 px-2'>
                <h2 className='text-center font-bold text-4xl capitalize '> special offers</h2>
                <h3 className='text-center mt-3 text-1xl capitalize '>Discover our exclusive offers</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded mt-4'>
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white overflow-hidden rounded-md shadow-md">
                <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover  " />
               <div className="p-4">
                 <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-2 min-h-[50]">{offer.des}</p>
                <p className="text-gray-600 mb-2">Price Off: {offer.priceoff}%</p>
                <p className="text-gray-600 mb-2">Expiry Date: {offer.expirdate}</p>
                <button>View Offer</button>
                </div>
              </div>
            ))}
            </div>      

    </div>
  )
}
