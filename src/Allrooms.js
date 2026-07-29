import deluxe from "../public/deluxe.jpg";
import seaView from "../public/seaView.jpg";
import standard from "../public/standard.jpg";
import cabin from "../public/cabin.jpg";
import { address } from "framer-motion/client";


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
    address: "Sheikh Zayed Road, Downtown Dubai"
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
    address: "Ocean Drive, Miami Beach, FL"
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
    address: "Oxford Street, Westminster, London"
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
    address: "Hudson Valley, NY"
  },
];

  export default rooms;