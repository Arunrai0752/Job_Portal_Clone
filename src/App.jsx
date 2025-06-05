import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Jobs from "./Pages/Jobs";
import Contact from "./Pages/Contact";
import pages from "./Pages/pages";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
