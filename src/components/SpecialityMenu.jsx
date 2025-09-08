import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div>
      <section>
          <p>Find by Speciality</p>
          <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      </section>
       <section id='Speciality' className='flex  gap-2 text-center'>
            { specialityData.map((item , index)=>(
              <Link key={index} to={`/doctors/${item.speciality}`}>
                  <img className='size-' src={item.image}  />
                  <p>{item.speciality}</p>
              </Link>
              ))}
       </section>
    </div>
  )
}

export default SpecialityMenu