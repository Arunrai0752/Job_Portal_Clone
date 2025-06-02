import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
