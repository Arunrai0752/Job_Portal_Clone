import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="overflow-hidden bg-[url(Registerpage.jpg)] h-[878.2px]  bg-cover bg-center flex">
        <div className="h-[878.2px] w-[800px]"></div>

        <div className="h-[878.2px] w-[1200px] flex justify-end items-center">
          <div className=" h-[878.2px] w-[800px] rounded-2xl bg-gray-500 opacity-80 ">
            <div className="h-[120px] w-[800px] flex  bg-red-400 text-6xl justify-center items-center text-blue-700 font-bold ">
              {" "}
              <h1>Register</h1>
            </div>

            <div>
              <div className="h-[140px] ">
                <div className="text-center text-4xl flex justify-center items-center pt-5">
                  <p>Name</p>
                </div>

                <div className="text-center text-2xl flex py-5 ">
                  <input
                    type="Name"
                    placeholder="First Name"
                    className="bg-white h-[60px] w-[205px] ps-2 text-center outline-none"
                  />
                  <span className="bg-white text-gray-400 p-2 text-4xl  w-[205px]">
                    |
                  </span>
                  <input
                    type="Name"
                    placeholder="Middle Name"
                    className="bg-white text-center outline-none"
                  />
                  <span className="bg-white text-gray-400 p-2 text-4xl  w-[205px]">
                    |
                  </span>
                  <input
                    type="Name"
                    placeholder="Last Name"
                    className="bg-white text-centerd outline-none"
                  />
                </div>
              </div>

              <div className="h-[140px] ">
                <div className="text-center text-4xl flex justify-center items-center pt-5 ">
                  <p>Email</p>
                </div>

                <div className="text-center text-2xl flex py-5 ">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-white h-[60px] w-full ps-2 text-center outline-none"
                  />
                </div>
              </div>

              <div className="h-[140px] ">
                <div className="text-center text-4xl flex justify-center items-center pt-5">
                  <p>Create Password</p>
                </div>

                <div className="text-center text-2xl flex py-5 ">
                  <input
                    type="password"
                    placeholder="Use Strong Password"
                    className="bg-white h-[60px] w-full text-center ps-2 outline-none"
                  />
                </div>
              </div>

              <div className="h-[140px] ">
                <div className="text-center text-4xl flex justify-center items-center pt-5">
                  <p>Confirm Password</p>
                </div>

                <div className="text-center text-2xl flex py-5 ">
                  <input
                    type="password"
                    placeholder=" Confirm Password"
                    className="bg-white h-[60px] w-full text-center ps-2 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center h-[150px] w-full">
              <button className="h-[80px] text-5xl font-bold bg-pink-700 px-12 rounded-3xl hover:bg-blue-400">
                SignUp
              </button>
            </div>

            <div className="text-2xl flex justify-center gap-3 items-center">
              <span> Already have an Account </span>
              <NavLink to={"/login"} className="font-bold">
                Login Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
