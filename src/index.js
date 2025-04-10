import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<Home />} />
       <Route path='login' element={<Login />} />
       <Route path='signup' element={<Signup />} />
       </Route>
     </Routes>
  
  </BrowserRouter>
);


