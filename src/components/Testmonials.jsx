import React from "react";
import person_1 from "../../public/person_1.jpg";
import person_2 from "../../public/person_2.jpg";
import person_3 from "../../public/person_3.jpg";
import { FaStar } from "react-icons/fa6";
export default function Testmonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      comment:
        "Amazing experience! The hotel was clean, staff were friendly, and the service was excellent. I highly recommend!. soon to be back again and it was a great experience for me and my family",
      rating: 5,
      image: person_1,
      location: "New York, USA",
    },
    {
      id: 2,
      name: "Murad Ahmed",
      comment:
        "I loved the location and the view. Everything was perfect, will definitely come back again! The staff were friendly and helpful, and the rooms were clean and spacious. I would highly recommend this hotel to anyone looking for a great place to stay.",
      rating: 4,
      image: person_2,
      location: "Dubai, UAE",
    },
    {
      id: 3,
      name: "Michael Lee",
      comment:
        "Great value for money. Rooms were comfortable and the booking process was very easy.   The staff were friendly and helpful, and the rooms were clean and spacious. I would highly recommend this hotel to anyone looking for a great place to stay.",
      rating: 4.5,
      image: person_3,
      location: "London, UK",
    },
  ];
  return (
    <div className="bg-gray-300 py-6 px-2 ">
      <h2 className="text-center font-bold capitalize text-3xl">Testmonials</h2>
      <h3 className="text-center text-1xl mt-3 capitalize">
        discover our clints reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-md p-4"
          >
            <div className="flex items-center justify-start ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex items-center flex-col">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p>{testimonial.location}</p>
                </div>
              
            </div>
            <div className="flex items-center mt-2">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
            </div>
            <p className="text-gray-600 mt-3">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
