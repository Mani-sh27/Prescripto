import React from 'react'

import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
    return (

        <div className='flex justify-between bg-blue-400 mx-28 h-[450px] mt-6 rounded-lg'>
            <div>

                <h1 className='text-5xl font-semibold text-white relative top-40 left-16'>Book Appointment  <br />with Trusted Doctors</h1>


                <div className='flex flex-col gap-28 mt-4'>
                    <img className='relative top-40  w-24 ms-16 mt-5 ' src={assets.group_profiles} alt="" />
                    <p className='text-white ms-44'>Simply browse through our extensive list of trusted doctors. <br /> scheduled your appointment hassle-free </p>
                    <a href="">Book Appointment <img src= alt="" /></a>
                </div>
            </div>
            <img src={assets.header_img} alt="" />
        </div>



    )
}

export default Header