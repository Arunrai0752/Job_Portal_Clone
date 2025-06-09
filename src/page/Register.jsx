import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(Registerpage.jpg)] bg-cover bg-center">
      <div className="bg-white/90 rounded-2xl shadow-lg max-w-xl w-full p-10">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Register</h1>
        <form className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-lg font-medium mb-1" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg font-medium mb-1" htmlFor="middleName">Middle Name</label>
              <input
                id="middleName"
                type="text"
                placeholder="Middle Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg font-medium mb-1" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="password">Create Password</label>
            <input
              id="password"
              type="password"
              placeholder="Use Strong Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xl font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6 text-lg">
          <span>Already have an account? </span>
          <NavLink to="/login" className="text-blue-600 font-semibold hover:underline">
            Login Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
