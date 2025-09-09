import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' flex-row sm:flex relative bg-[#5f6fff] h-[] mt-20 rounded-xl w-[860px] justify-between left-64 -ms-32 sm:w-[1240px]'>
      <section className='h-56 text-4xl text-white  font-semibold relative left-20 top-16 sm:relative sm:left-28 sm:top-20'>
        <p className=''>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
        <button>Create Account</button>
      <section>
        <img className='sm:w-xs me-20 hidden  ' src={assets.appointment_img}  />
      </section>
    </div>
  )
}

export default Banner