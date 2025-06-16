import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate = useNavigate();

  return (
    <>
      <nav className="  h-25 flex justify-around w-[100%] sticky top-0 px-30  bg-white ">
        <div>
          <img src="/logo.png" className=" h-18 w-60 mt-5" alt="Logo" />
        </div>
        <div className="list  flex items-center relative right-25 ">
          <ol className="list-unstyled  flex gap-12">
            <NavLink to={"/"} className="text-black hover:text-pink-700">Home</NavLink>
            <NavLink to={"/jobs"} className="text-black hover:text-pink-700">Find a Jobs </NavLink>
            <NavLink to={"/about"} className="text-black hover:text-pink-700">About</NavLink>
            <NavLink to={"/pages"} className="text-black hover:text-pink-700">Page</NavLink>
            <NavLink to={"/contact"} className="text-black hover:text-pink-700">Contact</NavLink>
          </ol>
        </div>
        <div className="  flex gap-3 items-center  relative right-25">
          <div>
            <button className=" bg-pink-600 py-5 px-15 text-white cursor-pointer" onClick={() => navigate("/register") }>
              Register
            </button>
          </div>
          <div>
            <button className=" border-1 py-5 px-12 text-pink-700 hover:bg-pink-700 hover:text-white cursor-pointer " onClick={() => navigate("/login") }>
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
