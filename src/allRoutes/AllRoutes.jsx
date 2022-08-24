import React from 'react'
import { Routes, Route } from 'react-router-dom';

//=========================================================
//           components import goes here
//========================================================= 
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';
import { Customers } from '../pages/customers/Customers';
import { Integrations } from '../pages/integrations/Integrations';
import Home from '../components/home/Home';

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/customers' element={<Customers/>} />
            <Route path='/integrations' element={<Integrations/>} />
        </Routes>
        <Footer/>     
    </div>
  )
};
 
