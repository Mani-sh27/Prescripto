import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Header from './components/Header'
import SpecialityMenu from './components/SpecialityMenu'
import TopDoctors from './components/TopDoctors'
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

        <Navbar />
         <Footer />
      <Routes>
        <Route path="/" element={
          <>
       
            <Header />
            <SpecialityMenu />
            <TopDoctors />
            
          </>
        } />


        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
