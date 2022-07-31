import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import HomeTemplace from "./templaces/homeTemplace/HomeTemplace";
import FilmDetail from "./pages/film/FilmDetail";
import CheckOut from "./pages/checkout/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeTemplace />}>
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/history" element={<Profile />} />
          <Route path="detail/:id" element={<FilmDetail />} />
          <Route path="ticketroom/:id"  element={<CheckOut/>} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
