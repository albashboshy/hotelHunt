import React from 'react'

export default function About () {
    const features = [
        'Private balcony or terrace with sea or garden views',
        'Comfortable king-size or twin beds',
        'Modern bathroom with premium amenities',
        'Air conditioning and high-speed Wi-Fi',
        'Flat-screen TV and in-room dining service'
    ]
  return (
        <section  className='px-4 md:px-16 lg:px-24 xl:px-32 pt-16'>

            <div className='text-center '>
                <h3 className='font-bold  lg:text-4xl'>About Us</h3>
                <h4 className='pt-2 font-bold'>Welcome to Your Seaside Escape</h4>
                <p className='text-left  columns-2'>
                    Discover a place where the rhythm of the waves sets the tone for your stay. Our beach resort offers a perfect blend of comfort, relaxation, and natural beauty, making it the ideal destination for your next getaway. Whether you're seeking a peaceful retreat or a fun-filled vacation, you’ll find everything you need right here.
                </p>
                <h4 className='font-bold lg:text-1xl mt-2'>
                    Rooms & Suites
                </h4>
                <p className='text-left'>
                    Wake up to breathtaking ocean views and the soothing sound of the sea. Our rooms and suites are thoughtfully designed to provide maximum comfort and a relaxed coastal atmosphere.
                </p>
                <ul className='flex flex-col list-type-none  text-left'>
                    <h3 className='font-bold '>Each room features:</h3>
                    {
                        features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))  
                    }
                </ul>
            </div>

            </section>

  )
}
