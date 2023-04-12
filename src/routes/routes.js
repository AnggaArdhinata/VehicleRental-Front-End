import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import Login from '../pages/login-register/login'
import Signup from '../pages/login-register/register'
import VehicleType from '../pages/vehicle/vehicle-type/vehicle-type'
import UnderConstruct from '../pages/underconstruct/underconstruct'
import Detail from '../pages/vehicle/vehicle-details/detail'
import PrivateRoutes from '../helpers/privateroute'


function routes() {
  return (
    <BrowserRouter>
        <Routes>
    
            <Route element={<PrivateRoutes/>}>
            <Route path='/vehicle-type' element={<VehicleType/>} />
            <Route path="/underconstruct" element={<UnderConstruct/>}/>
            <Route path='/details' element={<Detail/>} />
            </Route>

            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes