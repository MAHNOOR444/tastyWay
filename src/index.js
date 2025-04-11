import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './pages/Layout';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-papmOZVUIaH1lOHvoI0+6dX5+zRQJXXlN91Rokz6Zr3Clqq8bAFx2WVuD9ImxBRbn4A+Z1F9dU2CgfGzyFfnrA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>


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


