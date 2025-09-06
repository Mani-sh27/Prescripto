import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='lg:flex justify-between m  mx-auto w-7xl bg-[#5f6fff]  flex mt-6 rounded-lg 
                     '>
      <div className=' text-center '>
        <h1 className='font-semibold text-white relative top-40 left-16 xs:flex text-3xl'>
          Book Appointment <br />with Trusted Doctors
        </h1>

        <div className='flex flex-col gap-28 mt-4 items-center md:items-start'>
          <img
            className='md:relative top-40 w-24 ms-16 mt-5 sm:flex relative '
            src={assets.group_profiles}
            alt=''
          />
          <p className='text-white text-sm sm:text-base ms-0 md:ms-44 text-center '>
            Simply browse through our extensive list of trusted doctors. <br />
            scheduled your appointment hassle-free
          </p>
          <a
            className='relative -top-24 left-24 pt-2 ps-6 -pt-4 rounded-full bg-white w-56  transition-all duration-300 hover:-translate-y-2'
            href=''
          >
            Book Appointment
            <img
              className='relative -top-4.5 sm:flex-col flex'
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
