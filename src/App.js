import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import HomeTemplace from "./templaces/homeTemplace/HomeTemplace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeTemplace />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
