import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className=" d-flex justify-content-around mx-4  ">
        <div>
          
          <img src={logo} alt="" className="py-2" />
        </div>
        <div className="px-5">
          <ol className="list-unstyled d-flex  p-2 navlist">
            <li>Homes</li>
            <li>Finds a Jobs</li>
            <li> Abouts </li>
            <li>Pages</li>
            <li>Contacts</li>
          </ol>
        </div>
        <div className="buttons d-flex">
          <div>
            {" "}
            <button className="Register_Button py-3 px-5 text-white">Register</button>
          </div>
          <div>
            {" "}
            <button className="Login_button py-3 px-5">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
