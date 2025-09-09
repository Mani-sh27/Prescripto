import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className=' min-w-[900px] flex-row relative -left-7 h-[1230px] sm:flex  bg-[#5f6fff] mx-36 sm:relative sm:-left-6 mt-4 rounded-xl sm:h-[500px]'>
      <section >
        <p className='text-white  relative top-28 left-38 font-bold text-5xl sm:text-white sm:relative sm:left-20  sm:text-4xl sm:top-30'>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='sm:flex relative top-40 left-20'>
          <img src={assets.group_profiles} className=' -mt-4.5 relative left-44 sm:static sm:me-4 sm:mt-5' />
          <p className='text-white ms-20 text-2xl mt-6 sm:ms-4 sm:text-sm me-20 sm:text-white'>Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.</p>
        </div>
        <div className='sm:flex relative left-20 top-48'> 
        <button className=' ms-  bg-white left-20 relative  text-2xl sm:text-base sm:ps-10 sm:py-3 sm:-ms-20 sm:bg-[white] px-20 ps-15 py-4 rounded-full' type='button'>Book appointment</button>
        <img src={assets.arrow_icon} className=' relative left-87 w-6 -top-8 p-5 sm:w-4  sm:relative sm:top-0 cursor-pointer sm:-left-8'  />
        </div>

      </section>
      <section> 
        <img src={assets.header_img} className='w-[970px] relative top-45 -left-1   sm:w-[500px] sm:top-24  sm:relative sm:left-18' />
      </section>
    </div>
  )
}

export default Header