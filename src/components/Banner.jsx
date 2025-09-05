import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='flex'>
        <div>
            <p>Book Appointment</p>
            <p>with 100+ Truste Doctor</p>
        </div>
        <div>
            <img  className='w-2' src={assets.appointment_img}  />
        </div>
    </div>
  )
}

export default Banner