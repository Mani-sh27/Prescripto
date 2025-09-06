import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex justify-between lg:w-7xl bg-[#5f6fff] sm:flex w-3xl mt-6 rounded-lg 
                    flex-col  md:mx-16 lg:mx-28'>
      <div className=' text-center '>
        <h1 className='font-semibold text-white relative top-40 left-16 sm:flex text-3xl'>
          Book Appointment <br />with Trusted Doctors
        </h1>

        <div className='flex flex-col gap-28 mt-4 items-center md:items-start'>
          <img
            className='md:relative top-40 w-24 ms-16 mt-5 sm:flex relative '
            src={assets.group_profiles}
            alt=''
          />
          <p className='text-white ms-44 text-sm sm:text-base ms-0 md:ms-44 text-center md:text-left'>
            Simply browse through our extensive list of trusted doctors. <br />
            scheduled your appointment hassle-free
          </p>
          <a
            className='relative -top-24 left-24 pt-2 ps-6 -pt-4 rounded-full bg-white w-56 
                       transition-all duration-300 hover:-translate-y-2 
                       top-0 left-0 md:-top-24 md:left-24 text-center'
            href=''
          >
            Book Appointment
            <img
              className='relative  -top-4.5  md:left-44 md:-top-4.5 mx-auto md:mx-0'
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
