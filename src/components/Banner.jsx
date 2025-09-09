import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' flex-row sm:flex relative bg-[#5f6fff] mt-20 rounded-xl justify-between left-64 -ms-32 sm:w-[1240px]'>
      <section className='sm:text-white text-4xl font-semibold relative left-28 top-20'>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
        <button>Create Account</button>
      <section>
        <img className='sm:w-xs me-20 hidden ' src={assets.appointment_img}  />
      </section>
    </div>
  )
}

export default Banner