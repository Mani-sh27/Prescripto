import React from 'react'
import { Header } from "../components/Header";
import {SpecialityMenu}
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