import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' sm:flex relative bg-[#5f6fff] h-[350px] mt-20 rounded-xl w-[860px] justify-between left-64 -ms-32 sm:w-[1240px]'>
      <section className='h-56 text-4xl text-white  font-semibold relative left-20 top-16 sm:relative sm:left-28 sm:top-20'>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
      <div>
        <button className='sm:text-2xl relative top-8 -left-110  bg-white sm:top-52 px-'>Create Account</button>
      </div>
      <section>
        <img className='sm:w-xs me-20  sm:flex hidden ' src={assets.appointment_img}  />
      </section>
    </div>
  )
}

export default Banner