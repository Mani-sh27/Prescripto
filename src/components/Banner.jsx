import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div>
        <div>
            <p>Book Appointment</p>
            <p>with 100+ Truste Doctor</p>
        </div>
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner