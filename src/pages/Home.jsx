import React from 'react'
import { Header } from "../components/Header";
import {SpecialityMenu} from "../components/SpecialityMenu";
import {  } from "module";
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