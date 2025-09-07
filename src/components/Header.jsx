import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='flex'>
      <section>
        <p>Book Appointment <br />
          With Trusted Doctors</p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.</p>
        </div>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Header