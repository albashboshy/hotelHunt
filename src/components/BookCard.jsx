import React from "react";

export default function BookCard() {
  const cities = [
  "New York","Los Angeles","Chicago","Houston","Miami",
  "Toronto","Vancouver","Montreal","Ottawa","Calgary",
  "London","Manchester","Birmingham","Liverpool","Leeds",
  "Paris","Lyon","Marseille","Nice","Toulouse",
  "Berlin","Munich","Hamburg","Frankfurt","Cologne",
  "Madrid","Barcelona","Valencia","Seville","Bilbao",
  "Rome","Milan","Naples","Turin","Florence",
  "Amsterdam","Rotterdam","The Hague","Utrecht","Eindhoven",
  "Brussels","Antwerp","Ghent","Bruges","Leuven",
  "Vienna","Salzburg","Graz","Linz","Innsbruck",
  "Zurich","Geneva","Basel","Bern","Lausanne",
  "Stockholm","Gothenburg","Malmo","Uppsala","Vasteras",
  "Oslo","Bergen","Trondheim","Stavanger","Drammen",
  "Copenhagen","Aarhus","Odense","Aalborg","Esbjerg",
  "Helsinki","Espoo","Tampere","Vantaa","Oulu",
  "Tokyo","Osaka","Kyoto","Yokohama","Nagoya",
  "Seoul","Busan","Incheon","Daegu","Daejeon",
  "Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu",
  "Dubai","Abu Dhabi","Doha","Riyadh","Jeddah"
];
const handelDate=new Date().toISOString().split('T')[0];
let handletwo= new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
const handleGuest = (e)=>{
    if(e.target.value>5){
        e.target.value=5
    }
};

  return (
    <div className="bg-white  flex gap-3 flex-col rounded text-black p-2 w-full">
      <p className="text-left">Book Your Stay</p>
      <div className="text-left flex flex-col gap-1 ">
        <label>destination</label>
        <input className="rounded p-1 border outline-none" list="cities" />
    <datalist id="cities">
      {cities.map((city) => (
        <option key={city}>{city}</option>
    ))}
    </datalist>
      </div>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="text-left flex flex-col gap-1 ">
          <label>check in</label>
          <input className="rounded p-1 border outline-none" type="date" min={handelDate}/>
        </div>
        <div className="text-left flex flex-col gap-1">
          <label>check out</label>
          <input className="rounded p-1 border outline-none" type="date" min={handletwo} onChange={(e)=>{
              e.setAttribute('min',handletwo);
          }}   />
        </div>

        <div className="text-left flex flex-col gap-1">
          <label>guest</label>
     <input
  type="number" min='1' max='5' onChange={handleGuest}
  className="rounded p-1 border outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
/>
        </div>
        <div className="text-left flex flex-col gap-1">
          <label>room</label>
<input
  type="number" min="1"  max='5' onChange={handleGuest}
  className="rounded p-1 border outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
/>
        </div>

      </div>
      <button className='border-0  outline-none border-[#e89755] text-[#e89755]'>Search Hotel</button>
    </div>
  );
}
