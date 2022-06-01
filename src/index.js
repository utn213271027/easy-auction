import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarMenu from './components/NavBarMenu';
import Home from './components/Home';
import Products from './components/Products';
import Resenas from './components/Resenas';
import Register from './components/Register';
import Auth from './components/Auth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBarMenu></NavBarMenu>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/auth" element={<Auth />}></Route>
      <Route exact path="/productos" element={<Products />}></Route>
      <Route exact path="/resenas" element={<Resenas />}></Route>
      
    </Routes>
  </Router>
);

