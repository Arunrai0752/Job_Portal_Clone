import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Jobs from "./page/Jobs";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/Login";
import Pages from "./page/Pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
