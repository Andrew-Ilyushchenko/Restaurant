import React from 'react';
import logo from './logo.svg';
import { Navigate, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';
import Contact from './Pages/ContactPage';
import Blog from './Pages/BlogPage';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={< Navigate replace to = 'Menu'/>} ></Route>
        <Route path='/Menu' element={<MenuPage />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
        {/* <Route path='/Blog' element={< />} />
        <Route path='/PricingPage' element={<MenuPage />} />
        
        
        <Route path='/Menupage' element={<MenuPage />} /> */}
      </Routes>
  );
}

export default App;
