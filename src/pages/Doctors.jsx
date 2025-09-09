import React from 'react'

const Doctors = () => {
  return (
    <div>
      <p>Top Doctors</p>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {
          doctors.slice(0,10).map((item,index)=>(
              <div>
                <img src="" alt="" />
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctors