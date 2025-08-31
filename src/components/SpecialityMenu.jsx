import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets';
import {Link} from 'react-router-dom';
const SpecialityMenu = () => {

  return (
    <div id='speciality' >
        <h1 className='text-center text-3xl font-semibold mt-16'>Find by Speciality</h1>
        <p className='text-center mt-4'>Simply browse through our extensive list of trusted doctors , schedule <br /> your appointment hastle-free</p>
        <div className='flex gap-10 text-center sm:justify-center mt-12 '>
           {
                specialityData.map((item , index)=>(
                    <Link key={index} to={`/doctors/${item.speciality}`} className=' hover:-translate-y-2 transition-all duration-500'>
                        <img className='w-16 sm:w-24 mb-2 tra' src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))
           }
        </div>
    </div>
  )
}

export default SpecialityMenu