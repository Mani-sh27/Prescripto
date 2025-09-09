import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' flex relative bg-[#5f6fff]   left-64 w-[1100px]'>
      <section>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
      <section>
        <img className='w- ' src={assets.appointment_img} alt="" />
      </section>
    </div>
  )
}

export default Banner