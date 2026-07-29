import React, { useState } from "react";
import deluxe from "../../public/deluxe.jpg";
import seaView from "../../public/seaView.jpg";
import standard from "../../public/standard.jpg";
import cabin from "../../public/cabin.jpg";
import { image } from "framer-motion/client";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaLocationPin } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
export default function AllHotels() {
  const rooms = [
    {
      id: 1,
      hotelName: "Grand Palace Hotel",
      roomType: "Deluxe Room",
      pricePerNight: 220,
      isAvailable: true,
      image: deluxe,
      amenities: ["Free WiFi", "Air Conditioning", "Breakfast", "TV"],
      city: "Dubai, UAE",
    },
    {
      id: 2,
      hotelName: "Ocean View Resort",
      roomType: "Sea View Suite",
      pricePerNight: 300,
      isAvailable: false,
      image: seaView,
      amenities: ["Ocean View", "Pool", "Mini Bar", "Free Parking"],
      city: "Miami, USA",
    },
    {
      id: 3,
      hotelName: "City Lights Hotel",
      roomType: "Standard Room",
      pricePerNight: 140,
      isAvailable: true,
      image: standard,
      amenities: ["Free WiFi", "Heating", "TV", "Room Service"],
      city: "London, UK",
    },
    {
      id: 4,
      hotelName: "Mountain Escape Lodge",
      roomType: "Luxury Cabin",
      pricePerNight: 260,
      isAvailable: true,
      image: cabin,
      amenities: ["Mountain View", "Fireplace", "Breakfast", "Hot Tub"],
      city: "New York, USA",
    },
  ];
  const [openfilter, setopenfilter] = useState(false);
  const roomfilter = [
    "Single Room",
    "Deluxe Room",
    "Standard Room",
    "Sea View",
    "Family Suite",
  ];
  const priceRange = [
    "0 to 100",
    "100 to 150",
    "150 to 200",
    "200 to 260",
    "260 to 300",
  ];
  const sortRooms = ["Price Low to High", "Price High to Low", "Newest"];
  return (
    <section className="pt-25 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col-reverse lg:flex-row  justify-between items-start gap-3">
        <div className="left">
          <div className="flex flex-col items-center text-left ">
            <h1 className="sm:text-1xl md:text-4xl font-bold mb-2">
              Hotel Rooms
            </h1>
            <p className="text-[#e89755]  italic capitalize mt-5 text-center max-w-170">
              discover your perfect stay and comfortable rooms tailroed around
              the world from start to finish singel rooms to crazy suites rooms
              everything is here
            </p>
          </div>
          {rooms.map((room) => (
            <Link
              to={`/room/${room.id}`}
              key={room.id}
  className="flex flex-col sm:flex-row justify-between border border-gray-400 overflow-hidden mt-2 rounded hover:shadow-md transition"
            >
              <img
                src={room.image}
                alt={room.roomType}
                className="min-w-90 h-full   object-cover"
              />
              <div className=" w-full flex flex-col  p-2 ">
                <h2 className="font-bold text-center">{room.roomType}</h2>
                <p className="text-[#e89755] mt-1">
                  <span className="text-black">Price</span> : $
                  {room.pricePerNight} per night
                </p>
                <p className="text-gray-600 flex flex-row   items-center pt-2">
                  City: <FaLocationArrow className="mx-2" /> {room.city}
                </p>
                Amenities:
                <ul className=" list-none  mt-2 italic font-bold flex flex-col   lg:flex-row gap-1 ">
                  {room.amenities.map((amenity) => (
                    <li
                      className="font-normal bg-gray-200 p-1 rounded  text-[10px] sm:text-[12px] md:text-sm"
                      key={amenity}
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
        {/* start filter  */}
        <div className="w-full sm:max-w-md lg:max-w-lg bg-gray-50  rounded overflow-hidden border">
          <div
            className={`flex items-center justify-between p-2  border-gray-500 ${openfilter ? "border-b" : ""}`}
          >
            <p className="upper">Filter</p>
            <div className="flex flex-row  justify-between ">
              <span
                onClick={() => {
                  setopenfilter(!openfilter);
                }}
                className="lg:hidden"
              >
                {openfilter ? "Hide" : "Show "}{" "}
              </span>
              <span className="hidden lg:block">Clear</span>
            </div>
          </div>
          <div
            className={`${openfilter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}
          >
            <div className="p-3">
              <p className="text-gray-500 pb-2">Popular Filter </p>
              {roomfilter.map((item, index) => (
                <label
                  key={index}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="roomFilter"
                    value={item}
                    className="accent-[#e89755]"
                  />

                  {item}
                </label>
              ))}
            </div>
            <div className="p-3">
              <p className="text-gray-500 pb-2">Price Range </p>
              {priceRange.map((item, index) => {
                return (
                  <label key={index} className="flex items-center cursor-pointer gap-2">
                      <input type="checkbox" name="'priceRange" className="accent-[#e89755]" />  
                      {item}  
                  </label>
                );
              })}
            </div>
            <div className="p-3">
              <p className="text-gray-500 pb-2">Sort By </p>
              {sortRooms.map((item, index) => (
                <label
                  key={index}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input type="radio" name="sort" value={item}            className="accent-[#e89755]"/>

                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*

    <div className="pt-25 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className=" ">
        <div className=" text-center ">
          <h1 className="sm:text-1xl md:text-4xl font-bold mb-2">Hotel Rooms</h1>
          <p className="text-[#e89755]  italic capitalize mt-5 text-center">
            discover your perfect stay and comfortable rooms tailroed around the
            world from start to finish singel rooms to crazy suites rooms
            everything is here
          </p>
        </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   mt-4">
          {rooms.map((room) => (
            <div key={room.id}  className="shadow-md rounded  overflow-hidden">
         
             <Link to={`/rooms/${room.id}`}  
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={room.image}
                alt={room.roomType}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{room.roomType}</h2>
                <p className="text-[#e89755]"><span className="text-black">Price</span> : ${room.pricePerNight} per night</p>
                <p className="text-gray-600 flex flex-row   items-center"><FaLocationArrow className="mr-2" /> {room.city}</p>
                <ul className=" list-none mt-2 italic"> Amenities:  
                  {room.amenities.map((amenity) => (
                    <li className='hover:transform hover:scale-105 duration-75 transition-all bg-gray-100 p-1 my-1 rounded' key={amenity}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
*/
