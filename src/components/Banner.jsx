import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className=' flex relative bg-[#5f6fff]  justify-between left-64 -ms-32 w-[1200px]'>
      <section>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
      <section>
        <img className='w-xs' src={assets.appointment_img} alt="" />
      </section>
    </div>
  )
}

export default Banner