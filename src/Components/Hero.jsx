import React from "react";
import bgimg from "../assets/h1_hero.jpg";

const Hero = () => {
  return (
    <>
      <main>
        <div>
          <img src={bgimg} alt="" />

          <div className="maintext ps-40 pe-170 ">
            <p className="text-8xl font-bold text-[#3d3d52]">
              Find The <br /> Most Exciting <br /> Startup jobs
            </p>

            <div className="d-flex text-2xl bg-white  ">
              <input
                type="text"
                placeholder="Job Tittle or keywords"
                className="p-3 "
              />
              <select name="Location" id="" className="outline-none">
                <option value="">Location Bd</option>
                <option value="">Location Us</option>
                <option value="">Loaction Mk</option>
              </select>
              <button className=" bg-pink-700">Find Job</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
