import React from 'react'
import { Header } from "../components/Header";
import { specialityData } from '../assets/assets_frontend/assets';

const Home = () => {
  return (
    <div> <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home