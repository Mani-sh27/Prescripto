import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' flex relative bg-[#5f6fff] justify-between left-64 -ms-32 w-[1240px]'>
      <section className='text-white text-4xl font-semibold relative left-28 top-20'>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
      <section>
        <img className='w-xs me-20 mb-5' src={assets.appointment_img}  />
      </section>
    </div>
  )
}

export default Banner