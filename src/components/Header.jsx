import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#5f6fff] rounded-xl mx-6 sm:mx-12 mt-6 px-6 sm:px-12 py-10">
      
      {/* Left Section */}
      <section className="text-center lg:text-left max-w-xl">
        <p className="text-3xl sm:text-5xl text-white font-semibold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex items-center text-white mt-6 justify-center lg:justify-start">
          <img src={assets.group_profiles} alt="" className="w-16 sm:w-auto" />
          <p className="ms-4 text-sm sm:text-base">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <div className="flex items-center mt-8 justify-center lg:justify-start">
          <button className="bg-white text-[#5f6fff] px-6 sm:px-10 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Book Appointment
          </button>
          <img src={assets.arrow_icon} alt="" className="ml-3 w-6 sm:w-8" />
        </div>
      </section>

      {/* Right Section */}
      <section className="mt-10 lg:mt-0">
        <img src={assets.header_img} alt="" className="w-[300px] sm:w-[400px] lg:w-[500px]" />
      </section>
    </div>
  )
}

export default Header
