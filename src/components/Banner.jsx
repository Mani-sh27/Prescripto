import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='w-[200px]'>
      <section>
        <p>Book Appointment</p>
        <p>With 100+ Trusted Doctors</p>
      </section>
      <section>
        <img src={assets.app} alt="" />
      </section>
    </div>
  )
}

export default Banner