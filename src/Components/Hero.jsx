import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import { FaHardHat } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <main>
        <section>
          <div className="bg-[url('h1_hero.jpg')] h-[830px] w-[100%]  bg-no-repeat object-fill bg-cover items-center ">
            <div className="h-screen mx-auto  flex items-center relative bottom-[150px] pl-[200px]   ">
              <h1 className="text-8xl font-extrabold text-gray-700 ">
                Find the <br /> most exciting <br />
                startup jobs{" "}
              </h1>
            </div>

            <div className=" flex items-center text-zinc-500 text-2xl  relative bottom-[400px] left-[200px]">
              <input
                type="text"
                placeholder="Job Tittle or keyword"
                className="bg-gray-50 p-4 h-20 w-[360px] outline-none "
              />

              <select name="" id="" className="bg-gray-50 h-20 w-[360px] ">
                <option value="">Location Bd</option>
                <option value="">Location Pk</option>
                <option value="">Location Us</option>
              </select>
              <button className="bg-pink-600 h-20 w-[190px] text-white hover:bg-lime-600 cursor-pointer ">
                Find Job
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[1500px] w-[100%] ">
            <div className="flex grid text-center justify-center items-center h-[200px] py-[150px] mb-[150px] ">
              <p className="text-2xl text-pink-600">
                {" "}
                FEATURED TOURS PACKAGES{" "}
              </p>
              <br />
              <br />
              <h1 className="text-6xl font-bold">Browse Top Categories</h1>
            </div>

            <div className=" flex  justify-center gap-10">
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600  ">
                <div>
                  <FaUserTie className=" text-8xl relative left-10 text-blue-400   hover:text-pink-600" />
                  <span className="text-2xl">Design & Creative</span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <FaLaptopCode className=" text-8xl relative left-18 text-blue-400  hover:text-pink-600 " />
                  <span className="text-2xl">Design & Development </span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <FaChartLine className=" text-8xl relative left-12 text-blue-400  hover:text-pink-600" />
                  <span className="text-2xl">Sales & Marketing</span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <MdSmartphone className=" text-8xl relative left-12 text-blue-400  hover:text-pink-600" />
                  <span className="text-2xl">Mobile Application </span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
            </div>                                                                                                                                                                                                                                  
            <br />
            <br />
            <div className="flex  justify-center gap-10">
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <FaHardHat className=" text-8xl relative left-6 text-blue-400  hover:text-pink-600 " />
                  <span className="text-2xl">Construction</span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <FaMicrochip className=" text-8xl relative left-20 text-blue-400  hover:text-pink-600" />
                  <span className="text-2xl">Information Technology </span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
              <div className="h-80 w-80 flex justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <FaBuilding className=" text-8xl relative left-2 text-blue-400  hover:text-pink-600" />
                  <span className="text-2xl">Real Estate </span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
              <div className="h-80 w-80 flex grid justify-center items-center text-center border-1 border-green-200  hover:text-pink-600">
                <div>
                  <FaPenNib className=" text-8xl relative left-10 text-blue-400  hover:text-pink-600 " />
                  <span className="text-2xl">Content Writer </span>
                  <br />
                  <span className="text-2xl text-pink-600">(658)</span>
                </div>
              </div>
            </div>
          </div>


          <div className=" relative flex justify-center items-center bottom-[200px] ">

            <button className="border-1 py-[25px] px-[80px] rounded-2xl border-blue-500 text-blue-500 text-2xl cursor-pointer hover:bg-blue-500 hover:text-white "> Browse All Sectors </button>
          </div>
        </section>




        <section>


          <div className=" bg-[url('cv_bg.jpg')] bg-no-repeat object-fill bg-cover bg-center w-full h-[500px] mb-[500px]">

            <div className=" bg-blue-800 bject-fill opacity-70 bg-center w-full h-[500px] mb-[500px] grid  text-white flex justify-content-center  items-center text-center ">


              <div>
                
                              <span className="text-1xl">FEATURED TOURS PACKAGES</span>
                              <br /> <br />
                              <h1 className="text-5xl font-bold"> Make a Difference with Your <br /> Online Resume! </h1>
                              <br /> <br /> <br />
                              <button className=" py-4 px-15  rounded border-1 ">UPLOAD YOUR CV</button>
              </div>



            </div>


          </div>

        </section>
      </main>
    </>
  );
};

export default Hero;
