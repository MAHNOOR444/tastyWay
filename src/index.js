import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './pages/Layout';
import HotelPage from './pages/HotelPage';
import Customer from './pages/Customer';
import Rider from './pages/Rider';
import RestaurantOwner from './pages/RestaurantOwner';
import AddFoodItem from './pages/AddFoodItem';
import AboutUs from './pages/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="customers" element={<Customer />} />
        <Route path="hotel/:id" element={<HotelPage />} />
        <Route path="riders" element={<Rider />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="restaurant-owner" element={<RestaurantOwner />} />
        <Route path="add-food-item" element={<AddFoodItem />} />
        <Route path="about-us" element={<AboutUs/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
);