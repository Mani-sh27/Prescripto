import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
const SpecialityMenu = () => {
  return (
    <div>
      <section>
          <p>Find by Speciality</p>
          <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      </section>
       <section>
            { specialityData.map(()=>(
              <></>
              ))}
       </section>
    </div>
  )
}

export default SpecialityMenu