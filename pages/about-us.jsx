'use client'

import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full max-w-[500px] mx-auto md:mx-0">
          <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748598255/Untitled_500_x_300_px_500_x_500_px_4_ads2or.png" 
            alt="Sixth Star Technologies Office"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 text-justify">
            With more than 16 years of experience in offering a range of hosting services for any size business application, Sixth Star Technologies is a well-known and globally successful provider of IT solutions in India. Our corporate office is in Chennai and our sales office is in Malaysia.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            By upholding the project quality, timelines, and technical support services, more than 1200 projects have been successfully produced on various platforms and delivered to numerous clients in various locations.
          </p>
          <p className="text-gray-700 text-justify">
            With our hosting packages and solutions, we create exceptional value for our customers and offer a great return on investment. Our responsive support staff will be on hand around-the-clock to address any kind of technical difficulty and assist you via live chats, phone calls, and emails whenever necessary.
          </p>
        </div>
      </div>
    </section>
  )
}
