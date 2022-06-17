/*
 * @Descripttion:
 * @Author: 热伊木
 * @Date: 2022-06-10 20:23:30
 * @LastEditTime: 2022-06-17 15:10:12
 */
import React from "react";
import NavBar from "./components/navBar/index";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import AvatarDetail from "./pages/avatardetail/index";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/index";

export default function App() {
  return (
    <div style={{ width: "100vw" }}>
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
