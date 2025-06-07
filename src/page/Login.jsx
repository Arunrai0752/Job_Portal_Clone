import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="bg-[url(login.jpg)] bg-no-repeat  bg-cover bg-center h-[878.2px] w-screen  bg-gradient-to-r from-indigo-500/80 to-yellow-300/70   shadow-lg flex justify-center items-center ">
       
        <div className=" h-[550px] w-[550px] bg-gray-400  opacity-90 rounded-2xl ">
          <div className="h-[120px] text-center text-5xl bg-blue-600 font-bold p-[20px] text-white mb-[12px] pt rounded-1xl  ">
            <h1 className=" ">Log In</h1>
          </div>

          <div className="relative top-[60px]  grid justify-around items-center ">
            <div className=" h-[80px] relative p-5 w-550px flex  justify-around items-center  text-black rounded-b-2xl ">
              <span className=" text-[25px] float-start ">Email : </span>
              <input
                type="email"
                id="email"
                className="bg-white w-[400px] h-[60px] p-5 rounded-2xl text-2xl float-end outline-none"
                placeholder="Enter Your Email"
              />
            </div>


            <div className=" h-[80px] relative p-5 w-550px flex  justify-around items-center  text-black rounded-b-2xl  ">
              <span className=" text-[20px] float-start ">Password :  </span>
              <input
                type="password"
                id="name"
                className="bg-white w-[400px] h-[60px] p-5 rounded-2xl text-2xl  float-end outline-none"
                placeholder="Enter Your Password"
              />
            </div>

          </div>

          <div className="flex  text-2xl  justify-around items-center relative top-[80px]">
            <div>
              <input
                type="checkbox"
                name="Remember"
                className="m-2 mt-3  h-5 w-5"
              />
              <span>Remember Us</span>
            </div>
            <div>
              <NavLink>Forgot Password ?</NavLink>
            </div>
          </div>

          <div className="flex justify-center items-center relative top-[120px]">
            <button className=" w-[290px] h-[60px] rounded text-2xl bg-amber-500 cursor-pointer hover:bg-amber-400 hover:h-[58px] hover:w-[280px ]">LogIn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
