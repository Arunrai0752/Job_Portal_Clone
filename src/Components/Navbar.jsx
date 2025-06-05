import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-around align-content-center  m-2  ">
        <div>
          <img src="/logo.png" className="" alt="Logo" />
        </div>
        <div className="list mx-[120px] flex items-center">
          <ol className="list-unstyled  flex gap-10">
            <NavLink>Homes</NavLink>
            <NavLink>Finds a Jobs </NavLink>
            <NavLink>About</NavLink>
            <NavLink>Page</NavLink>
            <NavLink>Contact</NavLink>
           
          </ol>
        </div>
        <div className=" flex gap-3 items-center">
          <div>
            <button className=" bg-pink-700 py-4 px-12 text-white">
              Register
            </button>
          </div>
          <div>
            <button className=" border-1 py-4 px-12 text-pink-700 hover:bg-pink-700 hover:text-white ">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
