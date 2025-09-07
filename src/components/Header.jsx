import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='flex w-min-80 bg-[#5f6fff] mx-42 '>
      <section className=''>
        <p className='sm:text-3xl text-white mt-'>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='flex'>
          <img src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.</p>
        </div>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Header