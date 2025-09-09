import React from 'react'
import { doctors } from '../assets/assets_frontend/assets';

const Doctors = () => {
  return (
    <div>
      <p>Top Doctors</p>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {
          doctors.slice(0,10).map((item,index)=>(
              <div>
                <img src={item.ima} alt="" />
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctors