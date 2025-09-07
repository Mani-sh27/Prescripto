import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='flex bg'>
      <section>
        <p>Book Appointment <br />
          With Trusted Doctors</p>
        <div className='flex'>
          <img src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.</p>
        </div>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Header