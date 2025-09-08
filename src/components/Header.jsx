import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className=' min-w-[900px] flex-row relative -left-12 h-[1500px] sm:flex  bg-[#5f6fff] mx-42 mt-4 rounded-xl sm:h-[500px] '>
      <section >
        <p className='text-5xl left-40 top-18 font-medium leading-14  text-white  sm:text-white relative sm:left-20 sm:font-semibold sm:top-30 '>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='relative left-20 top-38  sm:flex sm:text-white'>
          <img src={assets.group_profiles} className='sm:w-[' />
          <p className='ms-4'>Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.</p>
        </div>
        <div className='sm:flex relative left-20 top-48'> 
        <button className='sm:bg-[white] px-10 ps-5 py-2 rounded-full' type='button'>Book appointment</button>
        <img src={assets.arrow_icon} className='sm:relative -left-7'  />
        </div>

      </section>
      <section> 
        <img src={assets.header_img} className='w-[970px] relative top-45 -left-1  sm:w-[500px] sm:top-24  sm:relative sm:left-18' />
      </section>
    </div>
  )
}

export default Header