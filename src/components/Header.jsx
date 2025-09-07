import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className=' min-w-[900px] flex-row relative -left-12  sm:flex bg-[#5f6fff] mx-42 mt-4 rounded-xl'>
      <section>
        <p className='text-5xl lef  text-white relative sm:text-white relative left-20 font-semibold top-30 '>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='flex  relative top-38 text-white left-20'>
          <img src={assets.group_profiles}  />
          <p className='ms-4'>Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.</p>
        </div>
        <div className='sm:flex relative left-20 top-48'> 
        <button className='sm:bg-[white] px-10 ps-5 py-2 rounded-full' type='button'>Book appointment</button>
        <img src={assets.arrow_icon} className='sm:relative -left-7'  />

        </div>

      </section>
      <section>
        <img src={assets.header_img} className='w-[600px] mt-5 relative left-4' />
      </section>
    </div>
  )
}

export default Header