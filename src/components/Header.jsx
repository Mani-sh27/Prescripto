import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex justify-between bg-[#5f6fff] mx-28 h-[450px] mt-6 rounded-lg 
                    flex-col md:flex-row mx-4 sm:mx-8 md:mx-16 lg:mx-28 h-auto md:h-[450px] p-4'>
      <div className='flex-1 text-center md:text-left'>
        <h1 className='text-5xl font-semibold text-white relative top-40 left-16 md:text-5xl 
                       text-2xl sm:text-3xl md:text-5xl top-10 md:top-40 left-0 md:left-16'>
          Book Appointment <br />with Trusted Doctors
        </h1>

        <div className='flex flex-col gap-28 mt-4 items-center md:items-start'>
          <img
            className='relative top-40 w-24 ms-16 mt-5  md:top-40 md:ms-16'
            src={assets.group_profiles}
            alt=''
          />
          <p className='text-white ms-44 text-sm sm:text-base  md:ms-44 text-center md:text-left'>
            Simply browse through our extensive list of trusted doctors. <br />
            scheduled your appointment hassle-free
          </p>
          <a
            className='relative -top-24 left-24 pt-2 ps-6 -pt-4 rounded-full bg-white w-56 
                       transition-all duration-300 hover:-translate-y-2 
                        md:-top-24 md:left-24 text-center'
            href=''
          >
            Book Appointment
            <img
              className='relative left-38 -top-4.5  md:left-38 md:-top-4.5 mx-auto md:mx-0'
              src={assets.arrow_icon}
              alt=''
            />
          </a>
        </div>
      </div>

      <img
        src={assets.header_img}
        className='w-full md:w-[50%] mt-6 md:mt-0 rounded-lg object-cover'
        alt=''
      />
    </div>
  )
}

export default Header
