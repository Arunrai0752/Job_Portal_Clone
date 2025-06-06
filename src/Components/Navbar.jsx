import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="  h-25 flex justify-around w-[100%] sticky top-0 px-30  bg-white ">
        <div>
          <img src="/logo.png" className=" h-18 w-60 mt-5" alt="Logo" />
        </div>
        <div className="list  flex items-center relative right-25 ">
          <ol className="list-unstyled  flex gap-12">
            <NavLink>Home</NavLink>
            <NavLink>Find a Jobs </NavLink>
            <NavLink>About</NavLink>
            <NavLink>Page</NavLink>
            <NavLink>Contact</NavLink>
           
          </ol>
        </div>
        <div className="  flex gap-3 items-center  relative right-25">
          <div>
            <button className=" bg-pink-600 py-5 px-15 text-white">
              Register
            </button>
          </div>
          <div>
            <button className=" border-1 py-5 px-12 text-pink-700 hover:bg-pink-700 hover:text-white ">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
