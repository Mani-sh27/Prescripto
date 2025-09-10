import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {AppContext }
const Doctors = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(App)
  return (
    <div>

    </div>
  )
}

export default Doctors