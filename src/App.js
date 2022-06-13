import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar/index';
import styles from './app.module.scss';
import { fetchGetConvert } from './utils/index';
import Home from './pages/home/index';
import About from './pages/about/index';
import AvatarDetail from './pages/avatardetail/index';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './pages/signin/index';

export default function App() {

  return (
    <div style={{ width: '100vw' }}>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="avatar/:id" element={<AvatarDetail />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/auth" element={<SignIn />} exact />
      </Routes>
    </div>
  );
}


