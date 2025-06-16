import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-400 to-yellow-200 bg-cover bg-center"
      style={{ backgroundImage: "url(/login.jpg)" }}
    >
      <div className="backdrop-blur-md bg-white/70 shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 tracking-wide">
          Log In
        </h1>
        <form className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Email or Username
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                  <path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4Z" />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg outline-none bg-white"
                placeholder="Enter your email or username"
                autoComplete="username"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="18"
                    height="12"
                    x="3"
                    y="8"
                    rx="2"
                  />
                  <path d="M7 8V6a5 5 0 0 1 10 0v2" />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg outline-none bg-white"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                className="accent-blue-600 h-4 w-4"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <NavLink
              to="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </NavLink>
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-xl bg-blue-600 text-white text-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
        <div className="mt-8 text-center text-gray-700 text-lg">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-700 font-bold hover:underline"
          >
            Sign Up Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
