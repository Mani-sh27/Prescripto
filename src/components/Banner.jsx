import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' sm:flex relative bg-[#5f6fff] h-[350px] mt-20 rounded-xl w-[860px] justify-between left-64 -ms-32 sm:w-[1240px]'>
      <section className='h-56 text-5xl text-white  font-semibold relative left-20 top-16 sm:relative sm:left-28 sm:top-20'>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
      <div>
        <button className='sm:text-md relative top-8 -left-150    bg-white sm:top-52 sm:-left-110 px-6 py-2 rounded-full'>Create Account</button>
      </div>
      <section>
        <img className='sm:w-xs me-20  sm:flex hidden ' src={assets.appointment_img}  />
      </section>
    </div>
  )
}

export default Banner