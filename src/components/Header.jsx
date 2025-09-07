import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='flex'>
      <section>
        <p>Book Appointment <br />
          With Trusted Doctors</p>
          <img src={assets.pro} alt="" />
      </section>
      <section>

      </section>
    </div>
  )
}

export default Header