import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className=' min-w-[900px] flex-row relative -left-7 h-[1500px] sm:flex  bg-[#5f6fff] mx-36 sm:relative sm:-left-6 mt-4 rounded-xl sm:h-[500px]'>
      <section >
        <p className='text-white relative top-28 left-38 font-semibold text-5xl sm:text-white sm:relative sm:left-20 sm:text-4xl sm:top-30'>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='sm:flex relative top-40 left-20'>
          <img src={assets.group_profiles} className=' relative left-44 sm:static sm:me-4 mt-5' />
          <p className='text-white text-2xl mt-6 sm:ms-4 sm:text-sm me-20 sm:text-white'>Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.</p>
        </div>
        <div className='sm:flex relative left-20 top-48'> 
        <button className=' ms-30 bg-white sm:bg-[white] px-10 ps-5 py-2 rounded-full' type='button'>Book appointment</button>
        <img src={assets.arrow_icon} className=' relative left-70 -top-7  sm:w-4 cursor-pointer sm:-left-8'  />
        </div>

      </section>
      <section> 
        <img src={assets.header_img} className='w-[970px]  relative top-45 -left-1  sm:w-[500px] sm:top-24  sm:relative sm:left-18' />
      </section>
    </div>
  )
}

export default Header