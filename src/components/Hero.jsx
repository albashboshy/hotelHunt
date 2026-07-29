import React from "react";
import hotel_2 from "../../public/hotel_3.jpg";
import BookCard from "./BookCard";
function HeroSection() {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-10 text-white bg-no-repeat bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${hotel_2})` }}
    
    >
  <div className="absolute inset-0 bg-black opacity-60">
      </div>
      <div className='capitalize relative z-10 text-center flex flex-col gap-3 justify-center items-center italic'>
          <p className='font-bold capitalize text-[#e89755]'>find your dream hotel  </p>
          <p>discover your perfect stay and top hotles around the world </p>
          <button className='uppercase  '>book now</button>
        <BookCard />
      </div>
    </div>
  );
}

export default HeroSection;
