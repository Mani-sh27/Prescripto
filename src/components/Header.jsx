import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='flex w-min-80 bg-[#5f6fff] rounded-xl mx-42 mt-4 h-[500px] '>
      <section className=''>
        <p className='sm:text-5xl text-white relative left-20 font-semibold top-30 '>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='flex  relative top-38 text-white left-20'>
          <img src={assets.group_profiles} alt="" />
          <p className='ms-4'>Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.</p>
        </div>
        <div className='flex absolute top'> 
        <button className='bg-[white] px-3 py-2 rounded-full' type='button'>Book appointment</button>
        <img src={assets.arrow_icon} alt="" />

        </div>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Header