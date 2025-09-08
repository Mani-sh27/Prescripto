import React from 'react'
import { assets, specialityData  } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div>
      <section>
          <p>Find by Speciality</p>
          <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      </section>
       <section id='Speciality'>
            { specialityData.map((item , index)=>(
              <Link key={index} to={`/doctors/${item.Speciality}`}>
                  <img src={item.image}  />
                  <p src={item.speciality}  />
              </Link>
              ))}
       </section>
    </div>
  )
}

export default SpecialityMenu